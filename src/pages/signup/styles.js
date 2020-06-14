import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
  background-color: #fff;
  padding-left: 60px;
  padding-right: 60px;
  flex: 1;
`;

export const Form = styled.View`
  margin: ${`${Dimensions.get('window').height * 0.1}px`} 0px;
`;

export const TextBtn = styled.Text`
  font-size: 15px;
  font-family: ${(props) => props.theme.fonts[0][2]};
  font-weight: bold;
  color: #fff;
`;

export const BtnSignUp = styled.TouchableOpacity`
  padding: 22px 0px;
  width: 100%;
  margin-top: 10px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;
