import React from 'react';
import { View } from 'react-native';

import { Container, Icon, IconCol, Input, InputCol, InputContainer } from './styles';
import CardCompany from "@/components/user/cardCompany";
import Header from "@/components/header";
import CompanyImg from "@/assets/imgs/company.png";
import { ScrollView } from 'react-native';

const fakeApi = [
    {
        name: 'Rocket Comp 01',
        rockets: 15,
        rating: 4,
    },
    {
        name: 'Rocket Comp 02',
        rockets: 10,
        rating: 2,
    },
    {
        name: 'Rocket Comp 01',
        rockets: 15,
        rating: 1,
    },
    {
        name: 'Rocket Comp 01',
        rockets: 17,
        rating: 5,
    }
];
export default function companies({ navigation }) {
    return (
        <>
            <Header name="Companies" back={navigation.goBack} />
            <Container>
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
                    {fakeApi.map((ele, i) => {
                        return (
                            <CardCompany data={ele} key={i} />
                        )
                    })}
                </ScrollView>
               </View>
            </Container>
        </>
    );
}