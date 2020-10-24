import React from 'react';
import styled from 'styled-components';

import { Layout, theme } from '../../common/ui';
import { NodeCard } from './nodes/NodeCard';
import { NoNodes } from './NoNodes';

const nodes = [];

// const nodes = [
//   {
//     id: '1',
//     title: 'Note Mapper',
//     component: <div>Node Mapper</div>,
//   },
//   {
//     id: '2',
//     title: 'Velocity',
//     component: <div>Velocity</div>,
//   },
//   {
//     id: '3',
//     title: 'Quanitzation',
//     component: <div>Quanitzation</div>,
//   },
//   {
//     id: '4',
//     title: 'Note Mapper',
//     component: <div>Node Mapper</div>,
//   },
//   {
//     id: '5',
//     title: 'Velocity',
//     component: <div>Velocity</div>,
//   },
//   {
//     id: '6',
//     title: 'Quanitzation',
//     component: <div>Quanitzation</div>,
//   },
// ];

const NODE_HEIGHT = 100;
const NODE_WIDTH = 200;
const NODES_PER_ROW = 3;
const TOP_PADDING = 64;
const LEFT_PADDING = 64;
const COL_SPACING = NODE_WIDTH + 100;
const ROW_SPACING = NODE_HEIGHT + 100;

const Root = styled(Layout.Fill)`
  padding: 4px 20px;
  background-color: ${theme.palette.neutralLighter};
`;

const HorizontalLine = styled.div`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.xStart}px;
  width: ${(props) => props.xEnd - props.xStart}px;
  height: 1px;
  background-color: black;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: ${(props) => props.yStart}px;
  left: ${(props) => props.x}px;
  height: ${(props) => props.yEnd - props.yStart}px;
  width: 1px;
  background-color: black;
`;

export const Editor = () => {
  const calcPositions = (i) => {
    const row = Math.floor(i / NODES_PER_ROW);
    const isNewRowStart = i > 0 && i % NODES_PER_ROW === 0;

    let col = i % NODES_PER_ROW;
    if (row % 2 === 1) {
      col = NODES_PER_ROW - col - 1;
    }

    const nodeTop = TOP_PADDING + row * ROW_SPACING;
    const nodeLeft = LEFT_PADDING + col * COL_SPACING;

    const lineYStart = isNewRowStart
      ? nodeTop + NODE_HEIGHT
      : nodeTop + NODE_HEIGHT / 2;

    const lineYEnd = isNewRowStart ? lineYStart + ROW_SPACING : lineYStart;

    const lineXStart = isNewRowStart
      ? nodeLeft + NODE_WIDTH / 2
      : nodeLeft + NODE_WIDTH;

    const lineXEnd = isNewRowStart ? lineXStart : nodeLeft + COL_SPACING;

    return {
      nodeTop,
      nodeLeft,
      lineYStart,
      lineYEnd,
      lineXStart,
      lineXEnd,
    };
  };

  const renderNode = (node, i) => {
    const positions = calcPositions(i);

    return (
      <React.Fragment key={node.id}>
        <NodeCard
          title={node.title}
          top={positions.nodeTop}
          left={positions.nodeLeft}
        >
          {node.component}
        </NodeCard>
        {positions.lineXStart === positions.lineXEnd ? (
          <VerticalLine
            yStart={positions.lineYStart}
            yEnd={positions.lineYEnd}
            x={positions.lineXStart}
          />
        ) : (
          <HorizontalLine
            y={positions.lineYStart}
            xStart={positions.lineXStart}
            xEnd={positions.lineXEnd}
          />
        )}
      </React.Fragment>
    );
  };

  return (
    <Root>
      <span>Node Editor</span>
      {nodes.length > 0 ? (
        nodes.map((node, i) => renderNode(node, i))
      ) : (
        <NoNodes />
      )}
    </Root>
  );
};
