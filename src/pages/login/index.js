import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { 
    Container, 
    Icon, 
    IconCol, 
    Input, 
    InputCol, 
    InputContainer, 
    Form, 
    Row, 
    Col,
    ColText, 
    H1, 
    Logo ,
    P,
    TextSignIn,
    IconSignin,
    BtnSignin
} from './styles';

import Header from "@/components/header";
import RockImg from "@/assets/imgs/rocket.png"

export default function login({ navigation }) {
    return (
        <>
            <Container behavior={'position'}>
                <Row>
                    <Col>
                        <Logo source={RockImg} />
                    </Col>
                    <ColText>
                        <H1>Rocket</H1>
                        <P>INTERPLANET</P>
                    </ColText>
                </Row>
                <Form>
                    <InputContainer>
                        <IconCol>
                            <Icon name="user" />
                        </IconCol>
                        <InputCol>
                            <Input placeholder={'E-mail'} />
                        </InputCol>
                    </InputContainer>

                    <InputContainer>
                        <IconCol>
                            <Icon name="lock" />
                        </IconCol>
                        <InputCol>
                            <Input secureTextEntry={true} placeholder={'Password'} />
                        </InputCol>
                    </InputContainer>

                    <Row style={{ justifyContent: 'space-between' }}>
                        <Col style={{ width: 'auto'}}>
                            <TextSignIn>Sign In</TextSignIn>
                        </Col>
                        <Col style={{ width: 'auto'}}>
                            <BtnSignin>
                                <IconSignin name={'arrow-right'}/>
                            </BtnSignin>
                        </Col>
                    </Row>
                </Form>

            </Container>
        </>
    );
}