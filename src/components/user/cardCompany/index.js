import React from 'react';
import { View } from 'react-native';

import { Container, Card, Col, Row, Text, Title, ImageCard , Stars} from './styles';
import CompanyImg from "@/assets/imgs/company.png";

export default function companies({ data }){
    const Rating = () =>{
        var sum = 0;
        console.log(data);
        
        data.rating.forEach(ele => {
            sum += ele;
        });

        let rating = sum / data.rating.length;

        if(Math.trunc(rating) == 1) {
            rating = 5;
        }
        let aux = 5 - Math.trunc(rating);

        let array = [];

        for (let i = 0; i < Math.trunc(rating); i++) {
            array.push(<Stars name={'star'}/>)
        }
        
        for (let i = 0; i < Math.trunc(aux); i++) {
            array.push(<Stars name={'star-o'}/>)
        }
        return array;
    }
    return (
        <Container> 
            <Col style={{ width: '35%'}}>
                <Card>
                    <ImageCard source={CompanyImg}/>
                </Card>
            </Col>

            <Col>
                <Row>
                    <Title>{data.name}</Title>
                </Row>
                <Row>
                    <Text>{data.rockets} Rockets</Text>
                </Row>
                <Row>
                    <Rating />
                </Row>
            </Col>
        </Container>
    );
}