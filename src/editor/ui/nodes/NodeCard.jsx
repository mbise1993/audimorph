import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Icon } from '@fluentui/react';

import { theme } from '../../../common/ui';

const Root = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  box-sizing: border-box;
  height: 100px;
  width: 200px;
  background-color: white;
  border: 1px solid black;
  border-radius: 6px;
  overflow: hidden;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  background-color: ${theme.palette.neutralLighter};
  border-bottom: 1px solid black;
`;

const CloseIcon = styled(Icon)`
  font-size: 12px;
  cursor: pointer;
`;

export const NodeCard = ({ title, children, ...rest }) => {
  return (
    <Root {...rest}>
      <TitleBar>
        <span>{title}</span>
        <CloseIcon iconName="ChromeClose" />
      </TitleBar>
      {children}
    </Root>
  );
};

NodeCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
