import React, { useState } from 'react';

import {
    Container,
    Row,
    BtnAdd,
    Col,
    Text,
    TextBtnAdd,
    Title,
    Desc,
    Img,
    Stars,
    BtnAddCompany,
    Input,
    ModalContainer
} from './styles';

import CompanyImg from "@/assets/imgs/company.png";
import Modal from "react-native-modal";
import Header from "@/components/header";
import CardRocket from "@/components/admin/cardRocket";

import { ScrollView } from "react-native";

const fakeRockets = [
    {
        model: 'RT-0123',
        sits: 15,
        price: 500,
        available: true
    },
    {
        model: 'RT-0183',
        sits: 15,
        price: 500,
        available: true
    },
    {
        model: 'RT-0124',
        sits: 20,
        price: 500,
        available: true
    }
];

export default function rockets({ navigation, route }) {
    const [modal, setModal] = useState(false);
    const { data } = route.params;

    const ModalContent = () => {
        return (
            <ModalContainer>
                <Row style={{ marginBottom: 20 }}>
                    <Col>
                        <Title style={{ color: '#212244' }}>Add Rocket</Title>
                    </Col>
                </Row>

                <Row>
                    <Input placeholder="Rocket Model" />
                </Row>

                <Row>
                    <Input placeholder="Price Per Fly" />
                </Row>

                <Row>
                    <Input placeholder="Sits" />
                </Row>
                <Row>
                    <BtnAddCompany>
                        <TextBtnAdd style={{ color: '#fff' }}>Add</TextBtnAdd>
                    </BtnAddCompany>
                </Row>
            </ModalContainer>
        )
    }

    const Rating = () => {
        let aux = 5 - data.rating;
        let array = [];
        for (let i = 0; i < data.rating; i++) {
            array.push(<Stars name={'star'} />)
        }

        for (let i = 0; i < aux; i++) {
            array.push(<Stars name={'star-o'} />)
        }
        return array;
    }

    return (
        <>
            <Header name="" back={navigation.goBack} />
            <Container>
                <Modal
                    isVisible={modal}
                    style={{ justifyContent: 'flex-end', margin: 0 }}
                    onBackButtonPress={() => setModal(false)}
                    onBackdropPress={() => setModal(false)}
                >
                    <ModalContent />
                </Modal>

                <Row style={{ marginBottom: 20 }}>
                    <Col style={{ width: "30%" }}>
                        <Img source={CompanyImg} />
                    </Col>
                    <Col style={{ width: "70%" }}>
                        <Row>
                            <Title>
                                {data.name}
                            </Title>
                        </Row>
                        <Row style={{ marginTop: 5 }}>
                            <Text>{data.rockets} Rockets</Text>
                        </Row>
                        <Row style={{ marginTop: 5 }}>
                            <Rating />
                        </Row>

                    </Col>
                </Row>

                <ScrollView style={{ paddingBottom: 10 }}>
                    <Row style={{ justifyContent: "space-between", marginBottom: 20 }}>
                        <Col>
                            <Desc>Rockets</Desc>
                        </Col>
                        <Col>
                            <BtnAdd onPress={()=> setModal(true)}>
                                <TextBtnAdd>
                                    Add
                            </TextBtnAdd>
                            </BtnAdd>
                        </Col>
                    </Row>

                    {fakeRockets.map((ele, i) => {
                        return (
                            <CardRocket data={ele} />
                        )
                    })}

                </ScrollView>
            </Container>
        </>
    )
}