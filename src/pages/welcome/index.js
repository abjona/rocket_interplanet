import React from 'react';
import Waves from '@/components/waves';
import { TouchableOpacity } from 'react-native';
import { Container, BtnSignIn, BtnCreate, TextBtn } from './styles';
// import { Container } from './styles';

export default function welcome({ navigation }) {
  return (
    <Container>
      <Waves />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <BtnCreate>
          <TextBtn>Create an account</TextBtn>
        </BtnCreate>
      </TouchableOpacity>

      <BtnSignIn onPress={() => navigation.navigate('Login')}>
        <TextBtn>Sign In</TextBtn>
      </BtnSignIn>
    </Container>
  );
}
