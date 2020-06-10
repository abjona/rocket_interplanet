import React from 'react';
import { View } from 'react-native';

import { Container, Card, Col, Row, Text, Title, ImageCard , Stars} from './styles';
import CompanyImg from "@/assets/imgs/company.png";

export default function companies({ data }){
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