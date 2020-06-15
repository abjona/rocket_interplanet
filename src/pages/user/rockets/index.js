import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';

import api from '@/configs/api';
import CardRocket from '@/components/user/cardRocket';
import Header from '@/components/header';
import Modal from 'react-native-modal';
import ModalRocket from '@/components/user/modal';
import { Container, Icon, IconCol, Input, InputCol, InputContainer } from './styles';

export default function rockets({ navigation, route }) {
  const { _id, name } = route.params;
  const [rocketsData, setRockets] = useState(null);
  const [rocketSearch, setRocketSearch] = useState(null);
  const [modal, setModal] = useState(false);
  const [dataRocket, setDataRocket] = useState(null);
  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const getRockets = async () => {
    const response = await api.get(_id ? `/rocket/${_id}` : 'rocket/getAll');
    setRockets(response.data);
    setRocketSearch(response.data);
    setLoad(false);
  };

  const onRefresh = async () => {
    setRefresh(true);
    await getRockets();
    setRefresh(false);
  };

  useEffect(() => {
    setLoad(true);
    getRockets();
  }, []);

  const searchRocket = async (text) => {
    const val = text;
    if (val && val.trim() !== '') {
      const search = rocketSearch.filter((item) => {
        return item.model.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
      await setRockets(search);
    } else {
      await setRockets(rocketSearch);
    }
  };
  return (
    <>
      <Header name={_id ? name : 'Rockets'} back={navigation.goBack} />
      <Modal
        isVisible={modal}
        style={{ justifyContent: 'flex-start', margin: 0 }}
        onBackButtonPress={() => setModal(false)}
        onBackdropPress={() => setModal(false)}
      >
        <ModalRocket
          data={dataRocket}
          closeModal={() => {
            setModal(false);
          }}
          refreshData={getRockets}
        />
      </Modal>
      <Container>
        {load ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color="#212244" size="large" />
          </View>
        ) : (
          <View style={{ marginHorizontal: 10 }}>
            <ScrollView
              refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
              showsVerticalScrollIndicator={false}
            >
              <InputContainer>
                <IconCol>
                  <Icon name="search" />
                </IconCol>
                <InputCol>
                  <Input
                    onChangeText={(text) => searchRocket(text)}
                    placeholder="Search a rocket"
                  />
                </InputCol>
              </InputContainer>
              {rocketsData ? (
                rocketsData.map((ele, i) => {
                  return (
                    <CardRocket
                      click={() => {
                        setDataRocket(ele);
                        setModal(true);
                      }}
                      data={ele}
                      key={i}
                    />
                  );
                })
              ) : (
                <></>
              )}
            </ScrollView>
          </View>
        )}
      </Container>
    </>
  );
}
