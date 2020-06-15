import React, { useState, useEffect } from 'react';

import api from '@/configs/api';
import moment from 'moment';

import Modal from 'react-native-modal';
import { ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import CardDates from '@/components/admin/cardDates';
import RocketImg from '@/assets/imgs/rocket.png';
import { useAuth } from '@/contexts/auth';
import {
  Row,
  Col,
  TextBtnAdd,
  Title,
  BtnAddCompany,
  ImageCard,
  ModalContainer,
  Icon,
  IconChair,
  IconMoney,
  IconInfo,
  Text,
  ContentMsg,
  TitleMsg,
  TextMsg,
  BtnOk,
  Stars,
} from './styles';

export default function modal({ closeModal, data, refreshData }) {
  const { refresh } = useAuth();
  const [numdate, setNumDates] = useState(data.dates.length);
  const [load, setLoad] = useState(false);
  const [index, setIndex] = useState(null);
  const [modalNot, setModalNot] = useState(false);
  const [arrayDates, setArrayDates] = useState(data ? data.dates : []);
  const [messageNot, setMessageNot] = useState('');
  const [title, setTitle] = useState('');
  const [errorRequest, setRequestError] = useState(false);

  const Aux = () => {
    const array = [];
    if (numdate > 0) {
      for (let i = 0; i < numdate; i++) {
        array.push(
          <Row>
            <CardDates
              valueDate={arrayDates[i]}
              clickDate={() => {
                setIndex(i);
              }}
              selectable
              index={i}
              colorIndex={index}
            />
          </Row>
        );
      }
      return array;
    }
    return <></>;
  };

  const validade = () => {
    const dateNow = moment().format('YYYY-MM-DD');
    const dateMark = moment(arrayDates[index]).format('YYYY-MM-DD');
    const verif = moment(dateNow).isBefore(dateMark);

    if (index === null) {
      setModalNot(true);
      setMessageNot('Select one Date');
      setRequestError(true);
      setTitle('Date Required');
      return false;
    }
    if (!verif && dateMark !== dateNow) {
      setModalNot(true);
      setMessageNot('rocket not available on this date');
      setRequestError(true);
      setTitle('Error');
      return false;
    }
    return true;
  };

  const Rating = () => {
    let sum = 0;

    data.company_info[0].rating.forEach((ele) => {
      sum += ele;
    });

    let rating;
    if (data.company_info[0].rating.length - 1 === 0) {
      rating = 0;
    } else {
      rating = sum / (data.company_info[0].rating.length - 1);
    }

    if (Math.trunc(rating) === 1) {
      rating = 5;
    }
    const aux = 5 - (rating ? Math.trunc(rating) : 0);

    const array = [];

    for (let i = 0; i < Math.trunc(rating); i++) {
      array.push(<Stars name="star" />);
    }

    for (let i = 0; i < Math.trunc(aux); i++) {
      array.push(<Stars name="star-o" />);
    }
    return array;
  };

  useEffect(() => {
    Aux();
  }, [numdate]);

  const makeReserve = async () => {
    if (validade()) {
      setLoad(true);
      const response = await api.post('/reservation/makeReservation', {
        idRocket: data._id,
        price: data.price,
        date: arrayDates[index],
      });

      if (response.data) {
        setLoad(false);
        const { error, message } = response.data;
        setModalNot(true);
        setRequestError(error);
        setMessageNot(message);
        setTitle(error ? 'Error !' : 'Success !');
        refreshData();
      }
    }
  };

  return (
    <ModalContainer>
      <Modal
        isVisible={modalNot}
        style={{ justifyContent: 'center', margin: 20 }}
        onBackButtonPress={() => setModalNot(false)}
        onBackdropPress={() => setModalNot(false)}
        animationIn="pulse"
        animationOut="bounceOut"
      >
        <ContentMsg>
          <Row>
            <TitleMsg>{title}</TitleMsg>
          </Row>
          <Row style={{ marginTop: 10 }}>
            <TextMsg>{messageNot}</TextMsg>
          </Row>
          <Row style={{ justifyContent: 'flex-end', width: '100%' }}>
            <BtnOk
              onPress={() => {
                if (errorRequest) {
                  setModalNot(false);
                } else {
                  closeModal();
                  setModalNot(false);
                  refresh();
                }
              }}
            >
              <TextBtnAdd style={{ color: '#212244' }}>OK</TextBtnAdd>
            </BtnOk>
          </Row>
        </ContentMsg>
      </Modal>
      <Row style={{ marginBottom: 20, justifyContent: 'space-between' }}>
        <Col>
          <Title style={{ color: '#212244' }}>Make a Reservation</Title>
        </Col>
        <Col>
          <TouchableOpacity onPress={closeModal}>
            <Icon style={{ fontSize: 18 }} name="close-a" />
          </TouchableOpacity>
        </Col>
      </Row>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Row>
          <Col style={{ width: '30%' }}>
            <ImageCard source={RocketImg} />
          </Col>
          <Col>
            <Row>
              <Title numberOfLines={1}>{data.model}</Title>
            </Row>
            <Row style={{ marginTop: 3 }}>
              <Col>
                <IconMoney name="attach-money" />
              </Col>
              <Col>
                <Text>{data.price.toFixed(2)}</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 3 }}>
              <Col>
                <IconChair name="chair" />
              </Col>
              <Col>
                <Text>{data.accents}</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ marginVertical: 20, alignItems: 'center' }}>
          <Title style={{ color: '#212244' }}>Company</Title>
        </Row>

        <Row style={{ alignItems: 'center' }}>
          <Text>{data.company_info[0].name}</Text>
        </Row>

        <Row style={{ marginVertical: 20, alignItems: 'center' }}>
          <Title style={{ color: '#212244' }}>Rate</Title>
        </Row>

        <Row>
          <Rating />
        </Row>

        <Row style={{ marginVertical: 20, justifyContent: 'space-between', alignItems: 'center' }}>
          <Col>
            <Title style={{ color: '#212244' }}>Dates</Title>
          </Col>
        </Row>

        <Aux />
        <Row>
          <BtnAddCompany onPress={makeReserve}>
            {load ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <TextBtnAdd style={{ color: '#fff' }}>Reserve</TextBtnAdd>
            )}
          </BtnAddCompany>
        </Row>
      </ScrollView>
    </ModalContainer>
  );
}
