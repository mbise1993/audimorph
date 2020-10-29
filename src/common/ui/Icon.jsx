import React from 'react';
import styled from 'styled-components';

export const Icon = styled.i`
  cursor: ${(props) => (props.clickable ? 'pointer' : '')};
  font-size: ${(props) => props.size};
`;
