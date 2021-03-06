import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';

import api from '@/configs/api';
import CardCompany from '@/components/user/cardCompany';
import Header from '@/components/header';
import { Container, Icon, IconCol, Input, InputCol, InputContainer } from './styles';

export default function companies({ navigation }) {
  const [companiesData, setCompanies] = useState(null);
  const [companiesSearch, setCompaniesSearch] = useState(null);
  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const getCompanies = async () => {
    const response = await api.get('/company/get');
    setCompanies(response.data);
    setCompaniesSearch(response.data);
    setLoad(false);
  };

  const onRefresh = async () => {
    setRefresh(true);
    await getCompanies();
    setRefresh(false);
  };

  useEffect(() => {
    setLoad(true);
    getCompanies();
  }, []);

  const searchComp = async (text) => {
    const val = text;
    if (val && val.trim() !== '') {
      const search = companiesSearch.filter((item) => {
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
      await setCompanies(search);
    } else {
      await setCompanies(companiesSearch);
    }
  };
  return (
    <>
      <Header name="Companies" back={navigation.goBack} />
      <Container>
        {load ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color="#212244" size="large" />
          </View>
        ) : (
          <View style={{ marginHorizontal: 10 }}>
            <ScrollView
              refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
              showsVerticalScrollIndicator={false}
            >
              <InputContainer>
                <IconCol>
                  <Icon name="search" />
                </IconCol>
                <InputCol>
                  <Input onChangeText={(text) => searchComp(text)} placeholder="Search a company" />
                </InputCol>
              </InputContainer>
              {companiesData ? (
                companiesData.map((ele, i) => {
                  return (
                    <CardCompany
                      click={() => navigation.navigate('Rockets', { _id: ele._id, name: ele.name })}
                      data={ele}
                      key={`${i}`}
                    />
                  );
                })
              ) : (
                <></>
              )}
            </ScrollView>
          </View>
        )}
      </Container>
    </>
  );
}
