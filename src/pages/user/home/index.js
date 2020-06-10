import React from 'react';
import { Dimensions, View } from 'react-native';

import { Container, Cover, Btn, Col, IconLogOut, Img, Row, Text, IconWallet, Scroll, Div } from './styles';
import ImgUser from "@/assets/imgs/astronaut.png";
import CardMenu from "@/components/user/cardMenu";
import CardReservation from "@/components/user/cardReservation";

const fakeReservation = [
    {
        model: 'RT-0123',
        sits: 15,
        price: 500,
        date: '15/03/2052'
    }
];

export default function home() {
    return (
        <Container>
            <Cover>
                <Row style={{ marginBottom: 20 }}>
                    <Col style={{ width: "25%" }}>
                        <Img source={ImgUser} />
                    </Col>
                    <Col style={{ width: "65%" }}>
                        <Text>JONATHAN</Text>
                        <Text>abjonathan@hotmail.com</Text>
                    </Col>
                    <Col style={{ width: "10%" }}>
                        <Btn>
                            <IconLogOut name="log-out" />
                        </Btn>
                    </Col>
                </Row>
                <Row style={{ marginTop: 40 }}>
                    <Col style={{ marginRight: 10 }}>
                        <IconWallet name="wallet" />
                    </Col>
                    <Col>
                        <Text style={{ fontSize: 30, fontWeight: 'normal' }}>U$ 10000,00</Text>
                    </Col>
                </Row>

            </Cover>
            <Div>
                <Scroll
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <CardMenu desc="Companies" />
                    <CardMenu desc="Rockets" />
                </Scroll>
            </Div>
            <View style={{ paddingHorizontal: 20 }}>
                <Row>
                    <Text style={{ color: '#212244', fontSize: 25 }}>
                        My Reservations
                </Text>
                </Row>
                <CardReservation data={fakeReservation[0]}/>
            </View>
        </Container>
    );
}

