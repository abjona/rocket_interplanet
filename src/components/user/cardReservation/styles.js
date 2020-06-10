import styled from 'styled-components/native';
import { MaterialIcons, Fontisto } from "@expo/vector-icons";

export const Container = styled.View`
    margin: 15px 0px;
    background-color: #fff; 
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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

export const Card = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    height: 75px;
    width: 75px;
    border-radius: 10px;
    background-color: #fff;
    elevation: 8;
    /* overflow: auto; */
    /* display: flex; */
`;

export const IconMoney = styled(MaterialIcons)`
    font-size: 15px;
    padding-right: 2px;
    color: ${(props) => props.theme.colors.secondary};
`;

export const IconDate = styled(Fontisto)`
    font-size: 15px;
    padding-right: 5px;
    color: ${(props) => props.theme.colors.secondary};
`;

export const BtnAdd = styled.TouchableOpacity`
    border-width: 1px;
    border-color: ${(props) => props.theme.colors.secondary};;
    border-style: solid;
    border-radius: 10px;
    padding: 5px 20px;
`;

export const TextBtn = styled.Text`
    font-family: ${(props) => props.theme.fonts[0][2]};
    color: ${(props) => props.theme.colors.secondary};
    font-size: 17px;
    font-weight: bold;
`;