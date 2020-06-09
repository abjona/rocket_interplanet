import styled from 'styled-components/native';
import { Dimensions, Animated } from "react-native";

export const Container = styled.View`
  height: ${Dimensions.get('window').height/2}; 
  width: 100%;
  background-color: #212244;
  flex: 0.9;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(Animated.Image)`
  height: 130px;
  width: 130px;
`;
