import styled from 'styled-components/native';
import { Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    margin: 10px 5px;
`;

export const Row = styled.View`
    flex-direction: row;
    margin: 3px 0px;
`;

export const Col = styled.View`
    flex-direction: column;
`;

export const Card = styled.View`
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    height: 120px;
    border-radius: 10px;
    background-color: #fff;
    elevation: 8;
`;

export const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts[0][2]};
    color: ${(props) => props.theme.colors.primary};
    font-size: 25px;
    font-weight: bold;
`;

export const ImageCard = styled.Image`
    width: 60px;
    height: 60px;
`;

export const Text = styled.Text`
    font-family: ${(props) => props.theme.fonts[0][2]};
    color: ${(props) => props.theme.colors.primary};
    font-size: 17px;
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