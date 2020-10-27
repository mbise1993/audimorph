import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';
import { Text } from './Text';

const Container = styled.div`
  height: 2.25em;
  padding: 0.25em 0.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--surface-c);
`;

export const PanelHeader = ({ title, closable, onClose }) => {
  return (
    <Container>
      <Text>{title}</Text>
      {closable && (
        <Icon
          clickable
          size="0.75em"
          className="pi pi-times"
          onClick={onClose}
        />
      )}
    </Container>
  );
};

PanelHeader.propTypes = {
  title: PropTypes.string.isRequired,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
};
