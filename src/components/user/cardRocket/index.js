import React from 'react';
import { View } from 'react-native';

import { 
    Container, 
    Card, 
    Col, 
    Row, 
    Text, 
    Title, 
    ImageCard, 
    IconChair, 
    IconMoney 
} from './styles';

import RocketImg from "@/assets/imgs/rocket.png";

export default function rocket({ data }) {

    return (
        <Container>
            <Col style={{ width: '40%' }}>
                <Card>
                    <ImageCard source={RocketImg} />
                </Card>
            </Col>

            <Col>
                <Row>
                    <Title>{data.model}</Title>
                </Row>
                <Row>
                    <Col>
                        <IconMoney name="attach-money"/>
                    </Col>
                    <Col>
                        <Text>U$ {data.price}</Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <IconChair name="chair" />
                    </Col>
                    <Col>
                        <Text>{data.accents}</Text>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}