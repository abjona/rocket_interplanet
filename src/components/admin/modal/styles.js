import styled from 'styled-components/native';
import { FontAwesome, Entypo, Fontisto } from '@expo/vector-icons';

export const Icon = styled(Fontisto)`
  font-size: 30px;
  padding-right: 2px;
  color: ${(props) => props.theme.colors.primary};
`;
export const Container = styled.View`
  padding: 10px 20px 0px 20px;
  background-color: #fff;
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const TextBtnAdd = styled.Text`
  font-size: 15px;
  font-family: ${(props) => props.theme.fonts[0][2]};
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const BtnAdd = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.primary};
  background-color: #fff;
  border-style: solid;
  border-radius: 10px;
  /* padding: 5px 30px; */
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  color: ${(props) => props.theme.colors.secondary};
  font-size: 20px;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  color: ${(props) => props.theme.colors.primary};
  font-size: 15px;
`;

export const IconAdd = styled(Entypo)`
  color: #fff;
  font-size: 12px;
  margin-right: 5px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 20px 10px 20px;
  background-color: #fff;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#212244',
})`
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.primary};
  border-style: solid;
  padding: 10px 15px;
  margin-bottom: 10px;
  height: 50px;
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
  border-radius: 10px;
`;

export const BtnAddCompany = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const TextBtn = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
