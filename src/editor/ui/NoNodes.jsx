import PropTypes from 'prop-types';
import React from 'react';

import { Button, FlexColumn, VerticalSpacer } from '../../common/ui';

export const NoNodes = ({ onAddNodeClick }) => {
  return (
    <FlexColumn height="75%" center="both">
      <h3>It&apos;s empty in here :(</h3>
      <VerticalSpacer size="s1" />
      <span>Add a node to get started</span>
      <VerticalSpacer size="s1" />
      <Button onClick={onAddNodeClick}>Add Node</Button>
    </FlexColumn>
  );
};

NoNodes.propTypes = {
  onAddNodeClick: PropTypes.func,
};
