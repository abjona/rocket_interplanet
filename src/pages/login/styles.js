import styled from 'styled-components/native';
import { KeyboardAvoidingView, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	padding-top: 55px;
	padding-left: 60px;
	padding-right: 60px;
	background-color: #fff;
	justify-content: flex-start;
`;

export const Input = styled.TextInput`
	color: ${(props) => props.theme.colors.primary};
`;

export const Icon = styled(Feather)`
	color: ${(props) => props.theme.colors.primary};
	font-size: 25px;
`;

export const Form = styled.View`
	margin: ${Dimensions.get('window').height * 0.3 + 'px'}  0px;
`;

export const Col = styled.View`
	flex-direction: column;
	width: 30%;
	justify-content: center;
	align-items: flex-start;
`;

export const ColText = styled.View`
	flex-direction: column;
	width: 70%;
	justify-content: center;
`;

export const Row = styled.View`
	flex-direction: row;
	
`;

export const H1 = styled.Text`
	font-family: ${(props) => props.theme.fonts[0][2]};
	color: ${(props) => props.theme.colors.secondary};
    font-size: 30px;
	font-weight: bold;
`;

export const TextSignIn = styled.Text`
	font-family: ${(props) => props.theme.fonts[0][2]};
	color: ${(props) => props.theme.colors.primary};
    font-size: 30px;
	font-weight: bold;
`;

export const P = styled.Text`
	font-family: ${(props) => props.theme.fonts[0][2]};
	color: ${(props) => props.theme.colors.primary};
    font-size: 20px;
	font-weight: bold;
`;

export const Logo = styled.Image`
	width: 60px;
	height: 60px;
`;

export const IconCol = styled.View`
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 15%;
`;

export const InputCol = styled.View`
	flex-direction: column;
	width: 70%;
	height: 100%;
`;

export const InputContainer = styled.View`
	flex-direction: row;
	padding-bottom: 8px;
	margin-bottom: 30px;
	width: 100%;
	border-bottom-width: 1px;
	border-bottom-color: ${(props) => props.theme.colors.primary};
`;

export const IconSignin = styled(Feather)`
	color: #fff;
	font-size: 30px;
`;

export const BtnSignin = styled.TouchableOpacity`
	background-color: ${(props) => props.theme.colors.primary};
	padding: 20px;
	border-radius: 50px;
	justify-content: center;
	align-items: center;
`;