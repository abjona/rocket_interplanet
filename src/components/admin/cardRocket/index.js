import React from 'react';
import { View } from 'react-native';

import { Container, Col, Card, Icon, Img, Text, Title, Row, IconInfo, IconMoney, IconChair } from './styles';
import RocketImg from "@/assets/imgs/rocket.png";

export default function cardRocket({ data }) {
    return (
        <Container>
            <Col style={{ width: "25%" }}>
                <Card>
                    <Img source={RocketImg} />
                </Card>
            </Col>
            <Col style={{ width: "40%" }}>
                <Row>
                    <Title>{data.model}</Title>
                </Row>
                <Row style={{ marginTop: 2 }}>
                    <Col>
                        <IconInfo name="info"/>
                    </Col>
                    <Text>{data.available ? 'Available' : 'Not Available'}</Text>
                </Row>

                <Row style={{ marginTop: 2 }}>
                    <Col>
                        <IconMoney name="attach-money"/>
                    </Col>
                    <Text>{data.price}</Text>
                </Row>
                
            </Col>
            <Col>
                <Row>
                    <IconChair name="chair" />
                    <Text>{data.sits}</Text>
                </Row>
            </Col>
        </Container>
    )
}