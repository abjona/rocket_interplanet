import React from 'react';
import RocketImg from '@/assets/imgs/rocket.png';
import { Container, Card, Col, Row, Text, Title, ImageCard, IconChair, IconMoney } from './styles';

export default function rocket({ data, click }) {
  return (
    <Container onPress={click}>
      <Col style={{ width: '40%' }}>
        <Card>
          <ImageCard source={RocketImg} />
        </Card>
      </Col>

      <Col>
        <Row>
          <Title numberOfLines={1}>{data.model}</Title>
        </Row>
        <Row>
          <Col>
            <IconMoney name="attach-money" />
          </Col>
          <Col>
            <Text numberOfLines={1}>{data.price.toFixed(2)}</Text>
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
