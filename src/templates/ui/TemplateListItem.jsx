import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Text } from '@fluentui/react';

import { theme } from '../../common/ui';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 0px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.palette.neutralLighter};
  }
`;

export const TemplateListItem = ({ template }) => {
  return (
    <Container>
      <Text>
        <strong>{template.name}</strong>
      </Text>
      <Text>{template.description}</Text>
    </Container>
  );
};

TemplateListItem.propTypes = {
  template: PropTypes.object,
};
