import React from 'react';
import { Container, Row, ColIcon, ColTitle, BackBtn, Icon, Title } from './styles';

export default function header({ name, back }) {
  return (
    <Container>
      <Row>
        <ColIcon>
          <BackBtn onPress={back}>
            <Icon />
          </BackBtn>
        </ColIcon>
        <ColTitle>
          <Title numberOfLines={1}> {name} </Title>
        </ColTitle>
      </Row>
    </Container>
  );
}
