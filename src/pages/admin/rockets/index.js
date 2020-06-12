import React, { useState, useEffect } from 'react';

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

import api from "@/configs/api";
import { ScrollView, View, ActivityIndicator, Dimensions } from "react-native";

export default function rockets({ navigation, route }) {
    const [modal, setModal] = useState(false);
    const { data } = route.params;

    const [rockets, setRockets] = useState([]);
    const [load, setLoad] = useState(false);

    const getRockets = async () => {
        setLoad(true);
        const response = await api.get(`/rocket/${data._id}`);
        setRockets(response.data);
        setLoad(false);
    }

    useEffect(() => {
        getRockets();
    }, []);

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
                    <Input placeholder="Accents" />
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
                            <Text>{rockets?.length} Rockets</Text>
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
                            <BtnAdd onPress={() => setModal(true)}>
                                <TextBtnAdd>
                                    Add
                            </TextBtnAdd>
                            </BtnAdd>
                        </Col>
                    </Row>

                    {!load ?
                        rockets.map((ele, i) => {
                            return (
                                <CardRocket data={ele} />
                            )
                        }) :
                        <View style={{ height: Dimensions.get("window").height * 0.6, justifyContent: "center", alignItems: "center" }}>
                            <ActivityIndicator color="#212244" size="large" />
                        </View>
                    }

                </ScrollView>
            </Container>
        </>
    )
}