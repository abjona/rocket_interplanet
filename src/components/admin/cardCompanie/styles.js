import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  padding: 15px 25px;
  margin: 10px 0;
  margin-left: 0px;
  border-radius: 15px;
  background-color: #fff;
  z-index: 1;
  display: flex;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  color: ${(props) => props.theme.colors.secondary};
  font-size: 20px;
  font-weight: bold;
`;

export const Stars = styled(FontAwesome)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 12px;
  margin-right: 5px;
`;

export const Detail = styled.View`
  position: absolute;
  left: -5px;
  top: 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  height: 30px;
  width: 10px;
`;

export const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  color: ${(props) => props.theme.colors.primary};
  font-size: 15px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin: 5px 0;
  width: 100%;
`;
