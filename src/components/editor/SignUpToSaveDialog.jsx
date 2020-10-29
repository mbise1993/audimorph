import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Dialog } from 'primereact/dialog';

import { Button, FlexColumn, FlexRow, Text, VerticalSpacer } from '../common';

const StyledDialog = styled(Dialog)`
  width: 600px;
  min-width: 400px;
`;

export const SignUpToSaveDialog = ({ open, onClose }) => {
  return (
    <StyledDialog modal visible={open} header="Save Template" onHide={onClose}>
      <FlexColumn align="center">
        <Text>You need to be signed in to save templates</Text>
        <VerticalSpacer size="1em" />
        <FlexRow align="center">
          <Button variant="text">Sign In</Button>
          <Text color="secondary">-or-</Text>
          <Button variant="text">Sign Up</Button>
        </FlexRow>
      </FlexColumn>
    </StyledDialog>
  );
};

SignUpToSaveDialog.propTypes = {
  template: PropTypes.object.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
