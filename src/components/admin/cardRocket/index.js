import React from 'react';
import RocketImg from '@/assets/imgs/rocket.png';
import {
  Container,
  Col,
  Card,
  Img,
  Text,
  Title,
  Row,
  IconInfo,
  IconMoney,
  IconChair,
} from './styles';

export default function cardRocket({ data, click }) {
  return (
    <Container onPress={click}>
      <Col style={{ width: '30%' }}>
        <Card>
          <Img source={RocketImg} />
        </Card>
      </Col>
      <Col style={{ width: '50%' }}>
        <Row>
          <Title>{data.model}</Title>
        </Row>
        <Row style={{ marginTop: 2 }}>
          <Col>
            <IconInfo name="info" />
          </Col>
          <Text>{data.accents > 0 ? 'Available' : 'Not Available'}</Text>
        </Row>

        <Row style={{ marginTop: 2 }}>
          <Col>
            <IconMoney name="attach-money" />
          </Col>
          <Text>{data.price} per flight</Text>
        </Row>
      </Col>
      <Col style={{ width: '20%' }}>
        <Row>
          <IconChair name="chair" />
          <Text>{data.accents}</Text>
        </Row>
      </Col>
    </Container>
  );
}
