import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import { useAuth } from '@/contexts/auth';
import api from '@/configs/api';

import ImgUser from '@/assets/imgs/astronaut.png';
import CardMenu from '@/components/user/cardMenu';
import CardReservation from '@/components/user/cardReservation';
import {
  Container,
  Cover,
  Btn,
  Col,
  IconLogOut,
  Img,
  Row,
  Text,
  IconWallet,
  Scroll,
  Div,
  IconInfo,
} from './styles';

export default function home({ navigation }) {
  const { user, signOut } = useAuth();
  const [reservation, setReservation] = useState(null);

  const getReservation = async () => {
    const storagedToken = await AsyncStorage.getItem('token');
    console.log(storagedToken);

    const response = await api.get('/reservation/get');
    setReservation(response.data);
  };

  useEffect(() => {
    getReservation();
  }, [user]);

  const handleSignout = async () => {
    await signOut();
  };

  return (
    <Container>
      <Cover>
        <Row style={{ marginBottom: 20 }}>
          <Col style={{ width: '25%' }}>
            <Img source={ImgUser} />
          </Col>
          <Col style={{ width: '65%' }}>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
          </Col>
          <Col style={{ width: '10%' }}>
            <Btn onPress={handleSignout}>
              <IconLogOut name="log-out" />
            </Btn>
          </Col>
        </Row>
        <Row style={{ marginTop: 40 }}>
          <Col style={{ marginRight: 10 }}>
            <IconWallet name="wallet" />
          </Col>
          <Col>
            <Text style={{ fontSize: 30, fontWeight: 'normal' }}>U$ {user.balance.toFixed(2)}</Text>
          </Col>
        </Row>
      </Cover>
      <Div>
        <Scroll horizontal showsHorizontalScrollIndicator={false}>
          <CardMenu
            click={() => {
              navigation.navigate('Companies');
            }}
            desc="Companies"
          />
          <CardMenu
            click={() => {
              navigation.navigate('Rockets', { _id: null, name: null });
            }}
            desc="Rockets"
          />
        </Scroll>
      </Div>
      <View style={{ paddingHorizontal: 20 }}>
        <Row>
          <Text style={{ color: '#212244', fontSize: 25 }}>My Reservations</Text>
        </Row>
        {reservation ? (
          reservation.length > 0 ? (
            <CardReservation refreshReservation={getReservation} data={reservation[0]} />
          ) : (
            <Row style={{ alignItems: 'center', marginTop: 15 }}>
              <Col style={{ width: '8%' }}>
                <IconInfo name="info" />
              </Col>
              <Col>
                <Text
                  style={{
                    color: '#8835F4',
                    fontSize: 20,
                    fontWeight: 'normal',
                  }}
                >
                  you have no reservation
                </Text>
              </Col>
            </Row>
          )
        ) : (
          <Row style={{ alignItems: 'center', marginTop: 15, marginLeft: 5 }}>
            <ActivityIndicator color="#8835F4" />
          </Row>
        )}
      </View>
    </Container>
  );
}
