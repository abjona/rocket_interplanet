import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.TouchableOpacity`
    background-color: #fff;
    padding: 20px 20px;
    margin: 0 10px;
    height: ${Dimensions.get('window').height * 0.31 + 'px'};
    width: ${Dimensions.get('window').width * 0.55 + 'px'};
    border-radius: 10px;
    elevation: 12;
    display: flex;
    z-index: 20;
`;

export const ImageMenu = styled.Image`
    width: 100px;
    height: 100px;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const Col = styled.View`
    flex-direction: column;
`;

export const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts[0][2]};
    color: ${(props) => props.theme.colors.secondary};
    font-size: 25px;
    font-weight: bold;
`;

export const Detail = styled.View`
    position: absolute;
    left: -5px;
    bottom: 20px;
    z-index: 10;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
    height: 30px;
    width: 10px;
`;


