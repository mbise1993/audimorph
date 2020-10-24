import React from 'react';
import styled from 'styled-components';
import { Text } from '@fluentui/react';

const Container = styled.header`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 8px;
  line-height: 1em;
`;

export const AppHeader = () => {
  return (
    <Container>
      <Text variant="xLarge">AudiMorph</Text>
    </Container>
  );
};
