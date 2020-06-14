import styled from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  /* width: 100%; */
  flex-direction: row;
  /* margin-bottom: 10px; */
  justify-content: space-between;
`;

export const Col = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View``;

export const ContentInput = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${(props) =>
    props.selected ? props.theme.colors.secondary : props.theme.colors.primary};
  border-style: solid;
  padding: 0 8px;
  margin-bottom: 10px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
`;

export const Icon = styled(Fontisto)`
  font-size: 30px;
  padding-right: 2px;
  color: ${(props) => (props.selected ? props.theme.colors.secondary : props.theme.colors.primary)};
`;

export const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  color: ${(props) => (props.selected ? props.theme.colors.secondary : props.theme.colors.primary)};
  font-size: 15px;
`;
