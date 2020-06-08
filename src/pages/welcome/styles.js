import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts[0][2]};
`;

export const BtnCreate = styled(LinearGradient).attrs((props)=>{
  const { gradients } = props.theme;
  return gradients['btn'];
})`
  padding: 22px 0px;
  width: 220px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const TextBtn = styled.Text`
  font-size: 15px;
  font-family: ${(props) => props.theme.fonts[0][2]};
  font-weight: bold;
  color: #fff;
`;

export const BtnSignIn = styled.TouchableOpacity`
  padding: 22px 0px;
  width: 220px;
  margin-top: 10px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary}
`;