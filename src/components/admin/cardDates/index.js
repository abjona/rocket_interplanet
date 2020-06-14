import React from 'react';
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Container, Col, Text, Icon, Row, ContentInput } from './styles';

export default function cardDates({ click, valueDate, clickDate, selectable, colorIndex, index }) {
  return (
    <Container>
      <ContentInput selected={colorIndex === index && selectable} onPress={clickDate}>
        <Row>
          <Col style={{ width: '15%', alignItems: 'flex-start' }}>
            <Icon selected={colorIndex === index && selectable} name="date" />
          </Col>

          <Col style={{ width: '75%', alignItems: 'flex-start' }}>
            <Text selected={colorIndex === index && selectable}>
              {valueDate ? moment(valueDate).format('DD/MM/YYYY') : 'DD/MM/YYYY'}
            </Text>
          </Col>
          <Col style={{ width: '10%', alignItems: 'flex-start' }}>
            {!selectable && (
              <TouchableOpacity onPress={click}>
                <Icon style={{ fontSize: 18 }} name="close-a" />
              </TouchableOpacity>
            )}
          </Col>
        </Row>
      </ContentInput>
    </Container>
  );
}
