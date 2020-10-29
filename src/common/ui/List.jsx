import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { FlexColumn, FlexRow } from './Flex';
import { Text } from './Text';
import { VerticalSpacer } from './Spacer';

const Container = styled(FlexRow)`
  &:hover {
    cursor: pointer;
    background-color: var(--surface-d);
  }
`;

export const ListItem = ({ primaryText, secondaryText, onClick }) => {
  return (
    <Container p="0.75em" onClick={onClick}>
      <FlexColumn>
        <Text>{primaryText}</Text>
        <VerticalSpacer size="0.3em" />
        <Text size="sm" color="secondary">
          {secondaryText}
        </Text>
      </FlexColumn>
    </Container>
  );
};

ListItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  onClick: PropTypes.func,
};
