import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { FlexRow, Icon, Text } from '../../../common/ui';
import { useConfirmation } from '../../../common/hooks';

const Root = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  height: 100px;
  width: 200px;
  padding: 0.5em;
  background-color: var(--surface-a);
  border: 1px solid var(--text-color-secondary);
  border-radius: 6px;
  overflow: hidden;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 0.65em;
`;

export const NodeCard = ({
  title,
  description,
  onDeleteClick,
  children,
  ...rest
}) => {
  const confirmDeleteDialog = useConfirmation({
    headerText: 'Delete Node',
    bodyText: 'Are you sure you want to delete this node?',
    onConfirm: onDeleteClick,
  });

  return (
    <>
      <Root {...rest}>
        <FlexRow align="center" justify="space-between">
          <Text>{title}</Text>
          <Icon
            clickable
            size="0.75em"
            className="pi pi-times"
            onClick={() => confirmDeleteDialog.setOpen(true)}
          />
        </FlexRow>
        <Content>
          <Text size="sm" color="secondary">
            {description}
          </Text>
        </Content>
      </Root>
      <confirmDeleteDialog.Component />
    </>
  );
};

NodeCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onDeleteClick: PropTypes.func,
  children: PropTypes.element,
};
