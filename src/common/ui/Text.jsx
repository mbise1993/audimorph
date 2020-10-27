import styled from 'styled-components';

const SIZES = {
  xl: '1.8em',
  lg: '1.3em',
  md: '1em',
  sm: '0.8em',
  xs: '0.5em',
};

const COLORS = {
  default: 'var(--text-color)',
  secondary: 'var(--text-color-secondary)',
  primary: 'var(--primary-color)',
};

export const Text = styled.span`
  font-size: ${(props) => SIZES[props.size || 'md']};
  color: ${(props) => COLORS[props.color || 'default']};
`;
