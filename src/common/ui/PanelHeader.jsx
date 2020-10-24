import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { theme } from './theme';

const Container = styled.div`
  height: 24px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  background-color: ${theme.palette.neutralLight};
`;

export const PanelHeader = ({ title }) => {
  return <Container>{title}</Container>;
};

PanelHeader.propTypes = {
  title: PropTypes.string,
};
