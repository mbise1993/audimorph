import styled from 'styled-components';
import { padding } from 'polished';

function paddingsMixin(props) {
  if (props.p) {
    return `padding: ${props.p}`;
  }

  return padding(props.pt, props.pr, props.pb, props.pl);
}

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.align || 'flex-start'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  ${(props) => paddingsMixin(props)}
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || 'flex-start'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  ${(props) => paddingsMixin(props)}
`;
