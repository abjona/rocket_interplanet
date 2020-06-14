import React, { useState, useEffect } from 'react';

import api from '@/configs/api';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { showMessage } from 'react-native-flash-message';

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
    if (index === null) {
      setModalNot(true);
      setMessageNot('Select one Date');
      setRequestError(true);
      setTitle('Date Required');
      return false;
    }
    return true;
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

      <Row>
        <Col style={{ width: '30%' }}>
          <ImageCard source={RocketImg} />
        </Col>
        <Col>
          <Row>
            <Title>{data.model}</Title>
          </Row>
          <Row style={{ marginTop: 3 }}>
            <Col>
              <IconMoney name="attach-money" />
            </Col>
            <Col>
              <Text>U$ {data.price}</Text>
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

      <Row style={{ marginTop: 20 }}>
        <Col>
          <IconInfo name="info" />
        </Col>
        <Text>{data.accents > 0 ? 'Available' : 'Not Available'}</Text>
      </Row>

      <Row style={{ marginVertical: 20, justifyContent: 'space-between', alignItems: 'center' }}>
        <Col>
          <Title style={{ color: '#212244' }}>Dates</Title>
        </Col>
      </Row>

      <ScrollView style={{ flex: 1 }}>
        <Aux />
      </ScrollView>
      <Row>
        <BtnAddCompany onPress={makeReserve}>
          {load ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <TextBtnAdd style={{ color: '#fff' }}>Reserve</TextBtnAdd>
          )}
        </BtnAddCompany>
      </Row>
    </ModalContainer>
  );
}
