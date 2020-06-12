import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Container, Icon, IconCol, Input, InputCol, InputContainer } from './styles';

import api from "@/configs/api";
import CardRocket from "@/components/user/cardRocket";
import Header from "@/components/header";
import CompanyImg from "@/assets/imgs/company.png";
import { ScrollView } from 'react-native';

export default function rockets({ navigation, route }) {
    const { _id, name } = route.params;
    const [rockets, setRockets] = useState(null);
    const [load, setLoad] = useState(false);

    const getRockets = async () => {
        setLoad(true);
        const response = await api.get(_id ? `/rocket/${_id}` : 'rocket/getAll');
        setRockets(response.data);
        setLoad(false);
    }

    useEffect(() => {
        getRockets();
    }, [])
    return (
        <>
            <Header name={_id ? name : "Rockets"} back={navigation.goBack} />
            <Container>
                {load ?
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator color="#212244" size="large" />
                    </View>
                    :
                    <View style={{ marginHorizontal: 10 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <InputContainer>
                                <IconCol>
                                    <Icon name="search" />
                                </IconCol>
                                <InputCol>
                                    <Input placeholder={'Search a rocket'} />
                                </InputCol>
                            </InputContainer>
                            {rockets ? rockets.map((ele, i) => {
                                return (
                                    <CardRocket data={ele} key={i} />
                                )
                            }) :
                                <></>
                            }
                        </ScrollView>
                    </View>
                }
            </Container>
        </>
    );
}