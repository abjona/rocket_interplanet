import React from 'react';
import { View } from 'react-native';

import { Container, Row, Text, Title, Stars, Detail } from './styles';

export default function cardCompanie({ data, click }) {

    const Rating = () => {
        var sum = 0;
      
        data.rating.forEach(ele => {
            sum += ele;
        });

        let rating = sum / data.rating.length;

        if (Math.trunc(rating) == 1) {
            rating = 5;
        }
        let aux = 5 - Math.trunc(rating);

        let array = [];

        for (let i = 0; i < Math.trunc(rating); i++) {
            array.push(<Stars name={'star'} />)
        }

        for (let i = 0; i < Math.trunc(aux); i++) {
            array.push(<Stars name={'star-o'} />)
        }
        return array;
    }
    return (
        <Container onPress={click}>
            <Detail />
            <Row>
                <Title>
                    {data.name}
                </Title>
            </Row>
            <Row>
                <Text>
                    Travel company
                </Text>
            </Row>
            <Row style={{ justifyContent: 'flex-end' }}>
                <Rating />
            </Row>
        </Container>
    )
}