import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { useAuth } from "@/contexts/auth";
import api from "@/configs/api";
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
    IconInfo
} from './styles';

import ImgUser from "@/assets/imgs/astronaut.png";
import CardMenu from "@/components/user/cardMenu";
import CardReservation from "@/components/user/cardReservation";
import { Icon } from '@/components/admin/cardRocket/styles';

const fakeReservation = [
    {
        model: 'RT-0123',
        sits: 15,
        price: 500,
        date: '15/03/2052'
    }
];

export default function home({ navigation }) {
    const { user, signOut } = useAuth();
    const [reservation, setReservation] = useState([]);

    const getReservation = async () => {
        const response = await api.get('/reservation/get');
        setReservation(response.data);
    }

    useEffect(() => {
        getReservation();
    }, []);

    return (
        <Container>
            <Cover>
                <Row style={{ marginBottom: 20 }}>
                    <Col style={{ width: "25%" }}>
                        <Img source={ImgUser} />
                    </Col>
                    <Col style={{ width: "65%" }}>
                        <Text>{user?.name}</Text>
                        <Text>{user?.email}</Text>
                    </Col>
                    <Col style={{ width: "10%" }}>
                        <Btn onPress={signOut}>
                            <IconLogOut name="log-out" />
                        </Btn>
                    </Col>
                </Row>
                <Row style={{ marginTop: 40 }}>
                    <Col style={{ marginRight: 10 }}>
                        <IconWallet name="wallet" />
                    </Col>
                    <Col>
                        <Text style={{ fontSize: 30, fontWeight: 'normal' }}>U$ {user?.balance}</Text>
                    </Col>
                </Row>

            </Cover>
            <Div>
                <Scroll
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <CardMenu click={() => { navigation.navigate("Companies") }} desc="Companies" />
                    <CardMenu click={() => { navigation.navigate("Rockets",{ _id: null, name: null }) }} desc="Rockets" />
                </Scroll>
            </Div>
            <View style={{ paddingHorizontal: 20 }}>
                <Row>
                    <Text style={{ color: '#212244', fontSize: 25 }}>
                        My Reservations
                </Text>
                </Row>
                {reservation.length > 0 ?
                    <CardReservation data={reservation} /> :
                    <Row style={{ alignItems: "center", marginTop: 15 }}>
                        <Col style={{ width: "8%" }}>
                            <IconInfo name="info" />
                        </Col>
                        <Col>
                            <Text style={{
                                color: '#8835F4',
                                fontSize: 20,
                                fontWeight: 'normal',
                            }}>
                                you have no reservation
                            </Text>
                        </Col>
                    </Row>
                }
            </View>
        </Container>
    );
}

