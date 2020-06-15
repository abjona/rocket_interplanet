import React from 'react';
import { Container, Row, Text, Title, Stars, Detail } from './styles';

export default function cardCompanie({ data, click, clickPress }) {
  const Rating = () => {
    let sum = 0;
    console.log(data);

    data.rating.forEach((ele) => {
      sum += ele;
    });

    let rating;
    if (data.rating.legth - 1 === 0) {
      rating = 0;
    } else {
      rating = sum / (data.rating.length - 1);
    }

    if (Math.trunc(rating) === 1) {
      rating = 5;
    }
    const aux = 5 - (rating ? Math.trunc(rating) : 0);

    console.log(Math.trunc(aux));

    const array = [];

    for (let i = 0; i < Math.trunc(rating); i++) {
      array.push(<Stars name="star" />);
    }

    for (let i = 0; i < Math.trunc(aux); i++) {
      array.push(<Stars name="star-o" />);
    }
    return array;
  };
  return (
    <Container onLongPress={clickPress} onPress={click}>
      <Detail />
      <Row>
        <Title>{data.name}</Title>
      </Row>
      <Row>
        <Text>Interplanetary travel</Text>
      </Row>
      <Row style={{ justifyContent: 'flex-end' }}>
        <Rating />
      </Row>
    </Container>
  );
}
