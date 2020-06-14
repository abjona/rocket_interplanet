import React, { useState, useEffect } from 'react';
import { ScrollView, View, ActivityIndicator, Dimensions, RefreshControl } from 'react-native';

import { useAuth } from '@/contexts/auth';
import ImgAdmin from '@/assets/imgs/astronaut.png';
import CardCompanie from '@/components/admin/cardCompanie';
import Modal from 'react-native-modal';
import { showMessage } from 'react-native-flash-message';

import api from '@/configs/api';
import {
  Container,
  Text,
  Col,
  Row,
  Img,
  Btn,
  IconLogOut,
  TextBtn,
  BtnAdd,
  ModalContainer,
  Input,
  BtnAddCompany,
  TextBtnAdd,
} from './styles';

export default function home({ navigation }) {
  const { user, signOut } = useAuth();
  const [modal, setModal] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [load, setLoad] = useState(false);
  const [loadBtn, setLoadBtn] = useState(false);
  const [nameCompany, setNameCompany] = useState('');
  const [idCompany, setIdCompany] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleClick = (data) => {
    navigation.navigate('RocketAdmin', { data });
  };

  const getCompanies = async () => {
    const response = await api.get('/company/get');
    setCompanies(response.data);
    setLoad(false);
  };

  const addCompany = async () => {
    setLoadBtn(true);
    if (nameCompany) {
      const response = await api.post('/company/store', { name: nameCompany });
      const { error, message } = response.data;

      showMessage({
        message: error ? 'Error' : 'Success',
        description: message,
        type: error ? 'danger' : 'success',
        duration: 2500,
      });

      if (!error) {
        getCompanies();
      }
      setModal(false);
      setNameCompany('');
    }
    setLoadBtn(false);
  };

  const onRefresh = async () => {
    setRefresh(true);
    await getCompanies();
    setRefresh(false);
  };

  const updateCompany = async () => {
    setLoadBtn(true);
    if (nameCompany) {
      const response = await api.put('/company/update', { name: nameCompany, _id: idCompany });
      const { error, message } = response.data;

      showMessage({
        message: error ? 'Error' : 'Success',
        description: message,
        type: error ? 'danger' : 'success',
        duration: 2500,
      });

      if (!error) {
        getCompanies();
      }
      setModal(false);
      setNameCompany('');
    }
    setLoadBtn(false);
  };

  useEffect(() => {
    setLoad(true);
    getCompanies();
  }, []);

  return (
    <Container>
      <Modal
        isVisible={modal}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackButtonPress={() => {
          setModal(false);
          setNameCompany('');
        }}
        onBackdropPress={() => {
          setModal(false);
          setNameCompany('');
        }}
      >
        <ModalContainer>
          <Row style={{ marginBottom: 20 }}>
            <Col>
              <Text>Add Company</Text>
            </Col>
          </Row>

          <Input
            value={nameCompany}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setNameCompany}
            placeholder="Company Name"
          />

          <BtnAddCompany onPress={idCompany ? updateCompany : addCompany}>
            {loadBtn ? (
              <ActivityIndicator color="#212244" />
            ) : (
              <TextBtnAdd>{idCompany ? 'Edit' : 'Add'}</TextBtnAdd>
            )}
          </BtnAddCompany>
        </ModalContainer>
      </Modal>

      <Row style={{ marginBottom: 20 }}>
        <Col style={{ width: '25%' }}>
          <Img source={ImgAdmin} />
        </Col>
        <Col style={{ width: '65%' }}>
          <Text>{user.name}</Text>
          <Text>{user.type}</Text>
        </Col>
        <Col style={{ width: '10%' }}>
          <Btn onPress={signOut}>
            <IconLogOut name="log-out" />
          </Btn>
        </Col>
      </Row>

      <ScrollView
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        <Row style={{ marginTop: 20, marginBottom: 10 }}>
          <Col>
            <Text>Companies</Text>
          </Col>
          <BtnAdd onPress={() => setModal(true)}>
            <TextBtn>Add</TextBtn>
          </BtnAdd>
        </Row>
        {!load ? (
          companies.map((ele, i) => {
            return (
              <CardCompanie
                clickPress={() => {
                  setModal(true);
                  setNameCompany(ele.name);
                  setIdCompany(ele._id);
                }}
                click={() => handleClick(ele)}
                data={ele}
                key={i}
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
            <ActivityIndicator color="#fff" size="large" />
          </View>
        )}
      </ScrollView>
    </Container>
  );
}
