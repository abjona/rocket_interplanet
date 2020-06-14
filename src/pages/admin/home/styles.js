import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

export const Container = styled.View`
  padding: 20px 20px 0px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  flex: 1;
`;

export const Img = styled.Image`
  height: 60px;
  width: 60px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const IconLogOut = styled(Entypo)`
  color: #fff;
  font-size: 30px;
`;

export const Btn = styled.TouchableOpacity``;

export const BtnAdd = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
  border-radius: 10px;
  padding: 5px 30px;
`;

export const TextBtn = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

export const ModalContainer = styled.View`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 20px 20px 20px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
  padding: 10px 15px;
  height: 50px;
  color: #fff;
  width: 100%;
  border-radius: 10px;
`;

export const TextBtnAdd = styled.Text`
  font-size: 15px;
  font-family: ${(props) => props.theme.fonts[0][2]};
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const BtnAddCompany = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
