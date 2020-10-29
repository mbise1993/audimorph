import styled from 'styled-components';

export const HorizontalSpacer = styled.div`
  display: inline;
  margin-left: ${(props) => props.size};
`;

export const VerticalSpacer = styled.div`
  margin-top: ${(props) => props.size};
`;
