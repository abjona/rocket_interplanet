import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {
    Container,
    Text,
    Col,
    Row,
    Img,
    Btn,
    IconLogOut,
    TextBtn,
    BtnAdd,
    ModalContainer,
    Input,
    BtnAddCompany,
    TextBtnAdd
} from './styles';

import ImgAdmin from "@/assets/imgs/astronaut.png";
import CardCompanie from "@/components/cardCompanie";
import Modal from "react-native-modal";

const fakeApi = [
    {
        name: 'Rocket Comp 01',
        rockets: 15,
        rating: 4,
    },
    {
        name: 'Rocket Comp 02',
        rockets: 10,
        rating: 2,
    },
    {
        name: 'Rocket Comp 01',
        rockets: 15,
        rating: 1,
    },
    {
        name: 'Rocket Comp 01',
        rockets: 17,
        rating: 5,
    }
];

const ModalContent = () =>{
    return (
        <ModalContainer>
            <Row style={{ marginBottom: 20 }}>
                <Col>
                    <Text>Add Company</Text>
                </Col>
            </Row>

            <Row>
                <Input placeholder="Company Name"/>
            </Row>
            <Row>
                <BtnAddCompany>
                    <TextBtnAdd>Add</TextBtnAdd>
                </BtnAddCompany>
            </Row>
        </ModalContainer>
    )
}

export default function home() {

    const [modal, setModal] = useState(false);

    return (
        <Container>
            
            <Modal 
                isVisible={modal}
                style={{ justifyContent: 'flex-end', margin: 0 }}
                onBackButtonPress={()=> setModal(false)}
                onBackdropPress={()=> setModal(false)}
            >
                <ModalContent />
            </Modal>

            <Row style={{ marginBottom: 20 }}>
                <Col style={{ width: "25%" }}>
                    <Img source={ImgAdmin} />
                </Col>
                <Col style={{ width: "65%" }}>
                    <Text>JONATHAN</Text>
                    <Text>Admin</Text>
                </Col>
                <Col style={{ width: "10%" }}>
                    <Btn>
                        <IconLogOut name="log-out" />
                    </Btn>
                </Col>
            </Row>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Row style={{ marginTop: 20, marginBottom: 10 }}>
                    <Col>
                        <Text>COMPANIES</Text>
                    </Col>
                    <BtnAdd onPress={()=> setModal(true)}>
                        <TextBtn>
                            Add
                        </TextBtn>
                    </BtnAdd>
                </Row>
                {fakeApi.map((ele, i) => {
                    return (
                        <CardCompanie data={ele} key={i} />
                    )
                })}
            </ScrollView>
        </Container>
    );
}