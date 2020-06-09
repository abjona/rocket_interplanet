import React from 'react';
import { View } from 'react-native';

import { Container, Row, Text, Title, Stars, Detail } from './styles';

export default function cardCompanie({ data }){

    const Rating = () =>{
        let aux =  5 - data.rating;
        let array = [];
        for (let i = 0; i < data.rating; i++) {
            array.push(<Stars name={'star'}/>)
        }
        
        for (let i = 0; i < aux; i++) {
            array.push(<Stars name={'star-o'}/>)
        }
        return array;
    }
    return(
        <Container>
            <Detail />
            <Row>
                <Title>
                    {data.name}
                </Title>
            </Row>
            <Row>
                <Text>
                    {data.rockets} Rockets
                </Text>
            </Row>
            <Row style={{ justifyContent: 'flex-end'}}>
               <Rating />
            </Row>
        </Container>
    )
}