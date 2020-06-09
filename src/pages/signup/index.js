import React from "react";
import { Container, Form, BtnSignUp, TextBtn } from "./styles";

import {
    Icon,
    IconCol,
    Input,
    InputCol,
    InputContainer
} from "@/pages/login/styles";

import Header from "@/components/header";

export default function signup({ navigation }) {
    return (
        <>
            <Header name="Create on Account" back={navigation.goBack} />
            <Container>
                <Form>
                    <InputContainer>
                        <IconCol>
                            <Icon name="user" />
                        </IconCol>
                        <InputCol>
                            <Input placeholder={'Name'} />
                        </InputCol>
                    </InputContainer>
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

                    <InputContainer>
                        <IconCol>
                            <Icon name="lock" />
                        </IconCol>
                        <InputCol>
                            <Input secureTextEntry={true} placeholder={'Repeat Password'} />
                        </InputCol>
                    </InputContainer>

                    <BtnSignUp>
                        <TextBtn>Create</TextBtn>
                    </BtnSignUp>
                </Form>

            </Container>
        </>
    );
}