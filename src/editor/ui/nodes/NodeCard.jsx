import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Button, PanelHeader } from '../../../common/ui';
import { useConfirmation } from '../../../common/hooks';

const Root = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  box-sizing: border-box;
  height: 100px;
  width: 200px;
  border: 1px solid var(--text-color-secondary);
  border-radius: 6px;
  overflow: hidden;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--surface-a);
`;

export const NodeCard = ({ title, onDeleteClick, children, ...rest }) => {
  const confirmDeleteDialog = useConfirmation({
    headerText: 'Delete Node',
    bodyText: 'Are you sure you want to delete this node?',
    onConfirm: onDeleteClick,
  });

  return (
    <>
      <Root {...rest}>
        <PanelHeader
          title={title}
          closable
          onClose={() => confirmDeleteDialog.setOpen(true)}
        />
        <Content>{children}</Content>
      </Root>
      <confirmDeleteDialog.Component />
    </>
  );
};

NodeCard.propTypes = {
  title: PropTypes.string,
  onDeleteClick: PropTypes.func,
  children: PropTypes.element,
};
