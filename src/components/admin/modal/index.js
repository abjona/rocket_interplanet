import React, { useState, useEffect } from 'react';

import api from '@/configs/api';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { showMessage } from 'react-native-flash-message';

import { ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import CardDates from '@/components/admin/cardDates';

import {
  Row,
  BtnAdd,
  Col,
  TextBtnAdd,
  Title,
  BtnAddCompany,
  Input,
  ModalContainer,
  Icon,
  IconAdd,
} from './styles';

export default function modal({ closeModal, companyId, refresh, data }) {
  const [model, setModel] = useState(data ? data.model : '');
  const [price, setPrice] = useState(data ? data.price.toString() : '');
  const [accents, setAccents] = useState(data ? data.accents.toString() : '');
  const [numdate, setNumDates] = useState(data ? data.dates.length : 0);
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(null);
  const [arrayDates, setArrayDates] = useState(data ? data.dates : []);

  console.log(data);

  const validade = () => {
    if (!model || !price || !accents || arrayDates.length === 0) {
      return false;
    }

    return true;
  };

  const addRocket = async () => {
    if (validade()) {
      setLoad(true);
      const response = await api.post('/rocket/store', {
        model,
        price,
        dates: arrayDates,
        accents,
        company: companyId,
      });

      if (response.data) {
        setLoad(false);
        showMessage({
          message: response.data.error ? 'Error' : 'Success',
          description: response.data.message,
          type: response.data.error ? 'danger' : 'success',
          duration: 2500,
        });
        closeModal();
        refresh();
      }
    }
  };

  const updateRocket = async () => {
    if (validade()) {
      setLoad(true);
      const response = await api.put('/rocket/update', {
        model,
        price,
        dates: arrayDates,
        accents,
        _id: data._id,
      });

      if (response.data) {
        setLoad(false);
        showMessage({
          message: response.data.error ? 'Error' : 'Success',
          description: response.data.message,
          type: response.data.error ? 'danger' : 'success',
          duration: 2500,
        });
        closeModal();
        refresh();
      }
    }
  };
  const handleAdd = () => {
    let aux = numdate;
    aux += 1;
    const newArr = [...arrayDates];
    newArr.push(new Date());
    setArrayDates(newArr);
    setNumDates(aux);
  };

  const handleRemove = (i) => {
    let aux = numdate;
    aux -= 1;
    const newArr = [...arrayDates];
    newArr.splice(i, 1);
    setArrayDates(newArr);
    setNumDates(aux);
  };

  const updateDate = (i, date) => {
    const newArr = [...arrayDates];
    newArr[i] = new Date(date);
    setShow(false);
    setArrayDates(newArr);
  };

  const Aux = () => {
    const array = [];
    if (numdate > 0) {
      for (let i = 0; i < numdate; i++) {
        array.push(
          <Row>
            <CardDates
              valueDate={arrayDates[i]}
              clickDate={() => {
                setShow(true);
                setIndex(i);
              }}
              click={() => handleRemove(i)}
              hasData={!!data}
            />
            <DateTimePickerModal
              isVisible={index === i && show}
              date={new Date(arrayDates[i])}
              onConfirm={(date) => {
                updateDate(i, date);
              }}
              onCancel={setShow(false)}
              onDateChange={(date) => {
                updateDate(i, date);
              }}
            />
          </Row>
        );
      }
      return array;
    }
    return <></>;
  };

  useEffect(() => {
    Aux();
  }, [numdate]);

  return (
    <ModalContainer>
      <Row style={{ marginBottom: 20, justifyContent: 'space-between' }}>
        <Col>
          <Title style={{ color: '#212244' }}>Add Rocket</Title>
        </Col>
        <Col>
          <TouchableOpacity onPress={closeModal}>
            <Icon style={{ fontSize: 18 }} name="close-a" />
          </TouchableOpacity>
        </Col>
      </Row>

      <ScrollView style={{ flex: 1 }}>
        <Row>
          <Input value={model} onChangeText={setModel} placeholder="Rocket Model" />
        </Row>

        <Row>
          <Input
            value={price}
            keyboardType="decimal-pad"
            onChangeText={setPrice}
            placeholder="Price Per Fly"
          />
        </Row>

        <Row>
          <Input
            value={accents}
            keyboardType="number-pad"
            onChangeText={setAccents}
            placeholder="Accents"
          />
        </Row>
        <Row style={{ marginBottom: 20, justifyContent: 'space-between', alignItems: 'center' }}>
          <Col>
            <Title style={{ color: '#212244' }}>Dates</Title>
          </Col>
          <BtnAdd
            onPress={handleAdd}
            style={{ backgroundColor: '#212244', height: 40, width: 60, padding: 0 }}
          >
            <IconAdd style={{ fontSize: 17 }} name="add-to-list" />
          </BtnAdd>
        </Row>

        <Aux />
        <Row>
          <BtnAddCompany onPress={data ? updateRocket : addRocket}>
            {load ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <TextBtnAdd style={{ color: '#fff' }}>{data ? 'Edit' : 'Add'}</TextBtnAdd>
            )}
          </BtnAddCompany>
        </Row>
      </ScrollView>
    </ModalContainer>
  );
}
