import React from 'react';
import styled from 'styled-components';

import { Text } from '../common';

const Container = styled.header`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.25em 0.75em;
  line-height: 1em;
`;

export const AppHeader = () => {
  return (
    <Container>
      <Text size="lg">AudiMorph</Text>
    </Container>
  );
};
