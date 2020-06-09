import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import { Container, Logo } from './styles';
import RockImg from "@/assets/imgs/rocket.png"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function waves() {
    const springValue = new Animated.Value(0.5);

    const AnimatedLogo = () => {
        springValue.setValue(0.5);
        Animated.spring(
            springValue,
            {
                toValue: 1,
                friction: 1,
                useNativeDriver: true
            }
        ).start();
    }

    useEffect(() => {
        AnimatedLogo();
    }, [])
    return (
        <>
            <Container>
                <TouchableOpacity activeOpacity={1} style={{ padding: 50 }} onPress={AnimatedLogo}>
                    <Logo style={{ transform: [{ scale: springValue }] }} source={RockImg} />
                </TouchableOpacity>
            </Container>
            <Svg height={90} width="100%" viewBox="0 30 1440 290">
                <Path fill="#212244" fill-opacity="1" d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,176C1120,192,1280,256,1360,288L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
                </Path>
            </Svg>
        </>
    )
}