import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import { Entypo, SimpleLineIcons } from "@expo/vector-icons";

export const Container = styled.View`
    flex: 1;
    z-index: 1;
    background-color: #fff;
`;

export const Cover = styled.View`
    z-index: 2;
    padding: 20px 20px 0px 20px;
    height: ${Dimensions.get('window').height /1.8};
    background-color: ${(props) => props.theme.colors.primary};
`;

export const Img = styled.Image`
    height: 50px;
    width: 50px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const Col = styled.View`
    flex-direction: column;
`;

export const Text = styled.Text`
    font-family: ${(props) => props.theme.fonts[0][2]};
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`;

export const IconLogOut = styled(Entypo)`
    color: #fff;
    font-size: 30px;
`;

export const IconWallet = styled(SimpleLineIcons)`
    color: #fff;
    font-size: 30px;
`;

export const Btn = styled.TouchableOpacity``;

export const Scroll = styled.ScrollView`
    flex: 1;
`;

export const Div = styled.View`
    height: 220px;
    padding-left: 5px;
    z-index: 2;
    margin-top: ${-Dimensions.get('window').height * 0.20};
`;
