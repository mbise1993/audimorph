import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';

const Container = styled.div`
  height: 2.25em;
  padding: 0.25em 0.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--surface-c);
`;

export const PanelHeader = ({ title, actions }) => {
  return (
    <Container>
      <Text>{title}</Text>
      {actions && <div>{actions}</div>}
    </Container>
  );
};

PanelHeader.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.element),
};
