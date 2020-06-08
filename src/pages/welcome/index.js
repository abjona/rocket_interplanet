import React from 'react';
import { Container, BtnSignIn, BtnCreate, TextBtn } from './styles';
import Waves from "@/components/waves";
import { TouchableOpacity } from "react-native";
// import { Container } from './styles';

export default function welcome() {
    return (
        <Container>
            <Waves />
            <TouchableOpacity>
                <BtnCreate>
                    <TextBtn>Create an account</TextBtn>
                </BtnCreate>
            </TouchableOpacity>

            <BtnSignIn>
                <TextBtn>Sign In</TextBtn>
            </BtnSignIn>
        </Container>
    )
}