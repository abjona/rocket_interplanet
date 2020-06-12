import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Container, Icon, IconCol, Input, InputCol, InputContainer } from './styles';

import api from "@/configs/api";
import CardCompany from "@/components/user/cardCompany";
import Header from "@/components/header";
import CompanyImg from "@/assets/imgs/company.png";
import { ScrollView } from 'react-native';

export default function companies({ navigation }) {
    const [companies, setCompanies] = useState(null);
    const [load, setLoad] = useState(false);

    const getCompanies = async () => {
        setLoad(true);
        const response = await api.get('/company/get');
        setCompanies(response.data);
        setLoad(false);
    }

    useEffect(() => {
        getCompanies();
    }, [])
    return (
        <>
            <Header name="Companies" back={navigation.goBack} />
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
                                    <Input placeholder={'Search a company'} />
                                </InputCol>
                            </InputContainer>
                            {companies ? companies.map((ele, i) => {
                                return (
                                    <CardCompany data={ele} key={i} />
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