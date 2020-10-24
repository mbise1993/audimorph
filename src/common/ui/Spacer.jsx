import styled from 'styled-components';

import { theme } from './theme';

export const HorizontalSpacer = styled.div`
  width: ${(props) => theme.spacing[props.size]};
`;

export const VerticalSpacer = styled.div`
  height: ${(props) => theme.spacing[props.size]};
`;
