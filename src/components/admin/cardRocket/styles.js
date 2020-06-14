import styled from 'styled-components/native';
import { Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  padding: 12px 12px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  /* margin: 10px 0; */
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  color: ${(props) => props.theme.colors.primary};
  font-size: 15px;
`;

export const Img = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Card = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  height: 75px;
  /* width: 100%; */
  border-radius: 10px;
  background-color: #fff;
  elevation: 8;
  /* overflow: auto; */
  /* display: flex; */
`;

export const Icon = styled.Image`
  width: 22px;
  height: 22px;
`;

export const IconInfo = styled(Feather)`
  font-size: 15px;
  padding-right: 2px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const IconMoney = styled(MaterialIcons)`
  font-size: 15px;
  padding-right: 2px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const IconChair = styled(FontAwesome5)`
  font-size: 15px;
  padding-right: 3px;
  color: ${(props) => props.theme.colors.secondary};
`;
