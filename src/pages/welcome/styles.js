import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
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

`;
