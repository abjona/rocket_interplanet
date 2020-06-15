import React, { useState } from 'react';
import RocketImg from '@/assets/imgs/rocket.png';
import moment from 'moment';
import Modal from 'react-native-modal';
import api from '@/configs/api';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useAuth } from '@/contexts/auth';
import {
  Container,
  Col,
  Card,
  Img,
  Text,
  Title,
  Row,
  IconMoney,
  BtnAdd,
  TextBtn,
  IconDate,
  BtnOk,
  ContentMsg,
  TextMsg,
  TitleMsg,
  Stars,
} from './styles';

export default function reservation({ data, refreshReservation }) {
  console.log(data);

  const { refresh } = useAuth();
  const [modalNot, setModalNot] = useState(false);
  const [modalRate, setModalRate] = useState(false);
  const [messageNot, setMessageNot] = useState('');
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState(0);
  const [load, setLoad] = useState(false);

  const cancelReservation = async () => {
    setLoad(true);
    const response = await api.delete(`/reservation/cancel/${data._id}`);
    if (response.data) {
      const { message, error } = response.data;

      if (!error) {
        await refresh();
        setModalNot();
      } else {
        setMessageNot(message);
        setTitle(error ? 'Error !' : 'Success !');
        setLoad(false);
      }
    }
  };

  const avaliation = async () => {
    setLoad(true);
    const response = await api.post('/company/available', {
      idCompany: data.rocket_info[0].company,
      idReservation: data._id,
      available: rate,
    });

    if (response.data) {
      const { error, message } = response.data;
      if (!error) {
        setMessageNot(message);
        setTitle(error ? 'Error !' : 'Success !');
        await refreshReservation();
        setLoad(false);
      } else {
        setMessageNot(message);
        setTitle(error ? 'Error !' : 'Success !');
        setLoad(false);
      }
    }
  };

  const verifyDates = () => {
    const dateNow = moment().format('YYYY-MM-DD');
    const dateMark = moment(data.date).format('YYYY-MM-DD');
    const verif = moment(dateNow).isBefore(dateMark);
    const verif2 = moment(dateNow).isAfter(dateMark);

    console.log(verif2, verif);

    if (verif) {
      return false;
    }
    if (verif2) {
      return true;
    }
    if (dateNow === dateMark) {
      return true;
    }
  };

  const RateStars = () => {
    const array = [];
    for (let i = 1; i < 6; i++) {
      array.push(
        <TouchableOpacity onPress={() => setRate(i)} style={{ padding: 10 }}>
          <Stars name={rate >= i ? 'star' : 'star-o'} />
        </TouchableOpacity>
      );
    }
    return array;
  };
  return (
    <Container>
      <Modal
        isVisible={modalRate}
        style={{ justifyContent: 'center', margin: 20 }}
        animationIn="pulse"
        animationOut="bounceOut"
      >
        {load ? (
          <ActivityIndicator color="#fff" size="large" />
        ) : (
          <ContentMsg>
            {!title ? (
              <>
                <Row>
                  <TitleMsg>Rate Company</TitleMsg>
                </Row>
                <Row style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                  <RateStars />
                </Row>
                <Row style={{ justifyContent: 'flex-end' }}>
                  <BtnOk
                    onPress={() => {
                      setModalRate(false);
                      setRate(0);
                    }}
                  >
                    <TextBtn style={{ color: '#212244' }}>Cancel</TextBtn>
                  </BtnOk>
                  <BtnOk onPress={avaliation}>
                    <TextBtn style={{ color: '#212244' }}>Rate</TextBtn>
                  </BtnOk>
                </Row>
              </>
            ) : (
              <>
                <Row>
                  <TitleMsg>{title}</TitleMsg>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <TextMsg>{messageNot}</TextMsg>
                </Row>
                <Row style={{ justifyContent: 'flex-end', width: '100%' }}>
                  <BtnOk
                    onPress={() => {
                      setModalRate(false);
                    }}
                  >
                    <TextBtn style={{ color: '#212244' }}>OK</TextBtn>
                  </BtnOk>
                </Row>
              </>
            )}
          </ContentMsg>
        )}
      </Modal>
      <Modal
        isVisible={modalNot}
        style={{ justifyContent: 'center', margin: 20 }}
        animationIn="pulse"
        animationOut="bounceOut"
      >
        {load ? (
          <ActivityIndicator color="#fff" size="large" />
        ) : (
          <ContentMsg>
            <Row>
              <TitleMsg>{title || 'Warning !'}</TitleMsg>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <TextMsg>{messageNot || 'Really want to cancel this reservation ?'}</TextMsg>
            </Row>
            <Row style={{ justifyContent: 'flex-end', width: '100%' }}>
              {!title ? (
                <>
                  <BtnOk onPress={cancelReservation}>
                    <TextBtn style={{ color: '#212244' }}>YES</TextBtn>
                  </BtnOk>

                  <BtnOk onPress={() => setModalNot(false)}>
                    <TextBtn style={{ color: '#212244' }}>NO</TextBtn>
                  </BtnOk>
                </>
              ) : (
                <BtnOk
                  onPress={() => {
                    setModalNot(false);
                  }}
                >
                  <TextBtn style={{ color: '#212244' }}>OK</TextBtn>
                </BtnOk>
              )}
            </Row>
          </ContentMsg>
        )}
      </Modal>
      <Col style={{ width: '30%' }}>
        <Card>
          <Img source={RocketImg} />
        </Card>
      </Col>
      <Col style={{ width: '40%' }}>
        <Row>
          <Title numberOfLines={1}>{data.rocket_info[0].model}</Title>
        </Row>

        <Row style={{ marginTop: 2 }}>
          <Col>
            <IconMoney name="attach-money" />
          </Col>
          <Text numberOfLines={1}>{data.price.toFixed(2)}</Text>
        </Row>

        <Row style={{ marginTop: 2 }}>
          <Col>
            <IconDate name="date" />
          </Col>
          <Text>{moment(data.date).format('DD/MM/YYYY')}</Text>
        </Row>
      </Col>
      <Col>
        {verifyDates() ? (
          !data.rate ? (
            <BtnAdd onPress={() => setModalRate(true)}>
              <TextBtn>Rate</TextBtn>
            </BtnAdd>
          ) : (
            <TextBtn>Already rated</TextBtn>
          )
        ) : (
          <BtnAdd onPress={() => setModalNot(true)}>
            <TextBtn>Cancel</TextBtn>
          </BtnAdd>
        )}
      </Col>
    </Container>
  );
}
