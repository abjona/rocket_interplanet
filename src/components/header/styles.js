import styled from 'styled-components/native';
import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
	height: 80px;
    width: 100%;
    background-color: #fff;
    padding: 15px;
`;

export const Row = styled.View`
    flex-direction: row;
    width: 100%;
`;

export const ColIcon = styled.View`
    flex-direction: column;
`;

export const BackBtn = styled.TouchableOpacity`

`;

export const ColTitle = styled.View`
    flex-direction: column;
`;

export const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts[0][2]};
    font-size: 20px;
`;

export const Icon = styled(FontAwesome5).attrs({
    name: 'chevron-left'
})`
    color: ${(props) => props.theme.colors.primary};
    font-size: 30px;
`;


