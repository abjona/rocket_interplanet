import React from 'react';
import { View } from 'react-native';

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
    IconDate
} 
from './styles';

import RocketImg from "@/assets/imgs/rocket.png";

export default function reservation({ data }) {
    return (
        <Container>
            <Col style={{ width: "30%" }}>
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
                        <IconMoney name="attach-money"/>
                    </Col>
                    <Text>{data.price}</Text>
                </Row>

                <Row style={{ marginTop: 2 }}>
                    <Col>
                        <IconDate name="date"/>
                    </Col>
                    <Text>{data.date}</Text>
                </Row>
                
            </Col>
            <Col>
                <BtnAdd>
                    <TextBtn>Cancel</TextBtn>
                </BtnAdd>
            </Col>
        </Container>
    )
}