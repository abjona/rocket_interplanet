import React, { useState } from 'react';
import { KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { useAuth } from "@/contexts/auth";
import { showMessage } from "react-native-flash-message";
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
    Logo,
    P,
    TextSignIn,
    IconSignin,
    BtnSignin
} from './styles';

import Header from "@/components/header";
import RockImg from "@/assets/imgs/rocket.png"

export default function login({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [load, setLoad] = useState(false);

    const { signIn } = useAuth();

    const handleSignIn = async () => {
        if (!email || !password) {
            showMessage({
                message: "Error",
                description: "error when logging in",
                type: "danger",
                duration: 2500
            });
            setLoad(false);
        }
        else {
            await signIn({ email, password });
            setLoad(false);
        }

    }


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
                            <Input
                                autoCorrect={false}
                                autoCapitalize="none"
                                textContentType={"emailAddress"}
                                value={email}
                                onChangeText={setEmail}
                                placeholder={'E-mail'}
                            />
                        </InputCol>
                    </InputContainer>

                    <InputContainer>
                        <IconCol>
                            <Icon name="lock" />
                        </IconCol>
                        <InputCol>
                            <Input
                                value={password}
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={setPassword}
                                secureTextEntry={true}
                                placeholder={'Password'}
                            />
                        </InputCol>
                    </InputContainer>
                    {load &&
                        <Row style={{ justifyContent: "center", alignItems: "center" }}>
                            <ActivityIndicator color="#212244" />
                        </Row>
                    }
                    {!load &&
                        <Row style={{ justifyContent: 'space-between' }}>
                            <Col style={{ width: 'auto' }}>
                                <TextSignIn>Sign In</TextSignIn>
                            </Col>
                            <Col style={{ width: 'auto' }}>
                                <BtnSignin onPress={() => {
                                    setLoad(true);
                                    handleSignIn();
                                }}>
                                    <IconSignin name={'arrow-right'} />
                                </BtnSignin>
                            </Col>
                        </Row>
                    }

                </Form>

            </Container>
        </>
    );
}