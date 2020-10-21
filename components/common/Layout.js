import styled from 'styled-components';

const ViewPort = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  overflow: hidden;
`;

const Top = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 8px;
  height: ${(props) => props.size};
  padding: ${(props) => props.padding};
`;

const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${(props) => props.size};
  padding: ${(props) => props.padding};
`;

const Left = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: ${(props) => props.size};
  padding: ${(props) => props.padding};
`;

const Right = styled.div`
  position: fixed;
  right: 0;
  height: 100%;
  width: ${(props) => props.size};
  padding: ${(props) => props.padding};
`;

const Fill = styled.div`
  height: 100%;
  width: 100%;
  padding: ${(props) => props.padding};
`;

export const Layout = {
  ViewPort,
  Top,
  Bottom,
  Left,
  Right,
  Fill,
};
