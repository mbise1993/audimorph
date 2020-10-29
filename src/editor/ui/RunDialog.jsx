import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';

const StyledDialog = styled(Dialog)`
  width: 800px;
  min-width: 400px;
`;

export const RunDialog = ({ template, open, onClose }) => {
  const handleRunClick = (e) => {};

  return (
    <StyledDialog
      modal
      visible={open}
      header={`Run Template "${template.name}"`}
      onHide={onClose}
    >
      <FileUpload
        multiple
        customUpload
        name="files[]"
        accept="audio/midi audio/x-midi"
        chooseLabel="Select Files"
        uploadLabel="Run"
        emptyTemplate="Select MIDI files to process"
        onUpload={handleRunClick}
      />
    </StyledDialog>
  );
};

RunDialog.propTypes = {
  template: PropTypes.object.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
