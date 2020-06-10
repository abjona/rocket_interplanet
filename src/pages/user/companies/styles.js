import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: #fff;
    flex: 1;
`;

export const InputContainer = styled.View`
	flex-direction: row;
    margin-top: 20px;
	padding-bottom: 10px;
	margin-bottom: 20px;
    margin-left: 10px;
	width: 95%;
	border-bottom-width: 1px;
	border-bottom-color: ${(props) => props.theme.colors.primary};
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

export const Icon = styled(Feather)`
	color: ${(props) => props.theme.colors.primary};
	font-size: 25px;
`;

export const Input = styled.TextInput.attrs({
	placeholderTextColor: '#212244'
})`
	color: ${(props) => props.theme.colors.primary};
`;
