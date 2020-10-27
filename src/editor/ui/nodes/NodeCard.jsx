import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Button, PanelHeader } from '../../../common/ui';

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
  return (
    <Root {...rest}>
      <PanelHeader title={title} closable onClose={onDeleteClick} />
      <Content>{children}</Content>
    </Root>
  );
};

NodeCard.propTypes = {
  title: PropTypes.string,
  onDeleteClick: PropTypes.func,
  children: PropTypes.element,
};
