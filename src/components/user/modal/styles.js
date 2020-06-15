import styled from 'styled-components/native';
import {
  MaterialIcons,
  Entypo,
  Fontisto,
  Feather,
  FontAwesome5,
  FontAwesome,
} from '@expo/vector-icons';

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

export const ImageCard = styled.Image`
  width: 60px;
  height: 60px;
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
  font-size: 18px;
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

export const BtnAddCompany = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const BtnOk = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const ContentMsg = styled.View`
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 10px;
`;

export const TextMsg = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  font-size: 17px;
`;
export const TitleMsg = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  font-size: 20px;
  font-weight: bold;
`;

export const TextBtn = styled.Text`
  font-family: ${(props) => props.theme.fonts[0][2]};
  color: #fff;
  font-size: 17px;
  font-weight: bold;
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

export const Stars = styled(FontAwesome)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 12px;
  margin-right: 5px;
`;
