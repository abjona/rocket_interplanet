import React, { useState, useEffect } from 'react';

import CompanyImg from '@/assets/imgs/company.png';
import Modal from 'react-native-modal';
import Header from '@/components/header';
import CardRocket from '@/components/admin/cardRocket';

import api from '@/configs/api';
import ModalAdd from '@/components/admin/modal';
import { ScrollView, View, ActivityIndicator, Dimensions, RefreshControl } from 'react-native';

import { Container, Row, BtnAdd, Col, Text, TextBtnAdd, Title, Desc, Img, Stars } from './styles';

export default function rockets({ navigation, route }) {
  const [modal, setModal] = useState(false);
  const { data } = route.params;
  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [rocketsData, setRockets] = useState([]);
  const [dataRocket, setDataRocket] = useState(null);

  const getRockets = async () => {
    const response = await api.get(`/rocket/${data._id}`);
    setRockets(response.data);
    setLoad(false);
  };

  useEffect(() => {
    setLoad(true);
    getRockets();
  }, []);

  const Rating = () => {
    let sum = 0;
    console.log(data);

    data.rating.forEach((ele) => {
      sum += ele;
    });

    let rating;
    if (data.rating.legth - 1 === 0) {
      rating = 0;
    } else {
      rating = sum / (data.rating.length - 1);
    }

    if (Math.trunc(rating) === 1) {
      rating = 5;
    }
    const aux = 5 - (rating ? Math.trunc(rating) : 0);

    console.log(Math.trunc(aux));

    const array = [];

    for (let i = 0; i < Math.trunc(rating); i++) {
      array.push(<Stars name="star" />);
    }

    for (let i = 0; i < Math.trunc(aux); i++) {
      array.push(<Stars name="star-o" />);
    }
    return array;
  };

  const onRefresh = async () => {
    setRefresh(true);
    await getRockets();
    setRefresh(false);
  };

  return (
    <>
      <Header name="" back={navigation.goBack} />
      <Container>
        <Modal
          isVisible={modal}
          style={{ justifyContent: 'flex-start', margin: 0 }}
          onBackButtonPress={() => setModal(false)}
          onBackdropPress={() => setModal(false)}
        >
          <ModalAdd
            data={dataRocket}
            closeModal={() => setModal(false)}
            companyId={data._id}
            refresh={getRockets}
          />
        </Modal>

        <Row style={{ marginBottom: 20 }}>
          <Col style={{ width: '30%' }}>
            <Img source={CompanyImg} />
          </Col>
          <Col style={{ width: '70%' }}>
            <Row>
              <Title>{data.name}</Title>
            </Row>
            <Row style={{ marginTop: 5 }}>
              <Text>{rocketsData.length} Rockets</Text>
            </Row>
            <Row style={{ marginTop: 5 }}>
              <Rating />
            </Row>
          </Col>
        </Row>

        <ScrollView
          refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
          showsVerticalScrollIndicator={false}
          style={{ paddingBottom: 10 }}
        >
          <Row style={{ justifyContent: 'space-between', marginBottom: 20 }}>
            <Col>
              <Desc>Rockets</Desc>
            </Col>
            <Col>
              <BtnAdd
                style={{ paddingHorizontal: 30, paddingVertical: 5 }}
                onPress={() => {
                  setDataRocket(null);
                  setModal(true);
                }}
              >
                <TextBtnAdd>Add</TextBtnAdd>
              </BtnAdd>
            </Col>
          </Row>

          {!load ? (
            rocketsData.map((ele, i) => {
              return (
                <CardRocket
                  click={() => {
                    setDataRocket(ele);
                    setModal(true);
                  }}
                  data={ele}
                />
              );
            })
          ) : (
            <View
              style={{
                height: Dimensions.get('window').height * 0.6,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator color="#212244" size="large" />
            </View>
          )}
        </ScrollView>
      </Container>
    </>
  );
}
