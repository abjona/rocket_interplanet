import React from 'react';
import CompanyImg from '@/assets/imgs/company.png';
import RocketImg from '@/assets/imgs/rocket.png';
import { Container, Col, ImageMenu, Row, Title, Detail } from './styles';

const images = {
  Rockets: RocketImg,
  Companies: CompanyImg,
};

export default function cardMenu({ desc, click }) {
  return (
    <Container onPress={click} activeOpacity={1}>
      <Row>
        <Col>
          <ImageMenu source={images[desc]} />
          <Title style={{ marginTop: 25 }}>{desc}</Title>
        </Col>
      </Row>
      <Detail />
    </Container>
  );
}
