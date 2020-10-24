import React from 'react';
import styled from 'styled-components';

import { NodeCard } from './nodes/NodeCard';
import { NoNodes } from './NoNodes';
import { theme } from '../../common/ui';

// const nodes = [];

const nodes = [
  {
    id: '1',
    title: 'Note Mapper',
    component: <div>Node Mapper</div>,
  },
  {
    id: '2',
    title: 'Velocity',
    component: <div>Velocity</div>,
  },
  {
    id: '3',
    title: 'Quanitzation',
    component: <div>Quanitzation</div>,
  },
  {
    id: '4',
    title: 'Note Mapper',
    component: <div>Node Mapper</div>,
  },
  {
    id: '5',
    title: 'Velocity',
    component: <div>Velocity</div>,
  },
  {
    id: '6',
    title: 'Quanitzation',
    component: <div>Quanitzation</div>,
  },
  {
    id: '7',
    title: 'Velocity',
    component: <div>Velocity</div>,
  },
  {
    id: '8',
    title: 'Quanitzation',
    component: <div>Quanitzation</div>,
  },
];

const NODE_HEIGHT = 100;
const NODE_WIDTH = 200;
const NODES_PER_ROW = 3;
const TOP_PADDING = 64;
const LEFT_PADDING = 64;
const COL_SPACING = 100;
const ROW_SPACING = 100;

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
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
    let col = i % NODES_PER_ROW;
    if (row % 2 === 1) {
      col = NODES_PER_ROW - col - 1;
    }

    const isReverseRow = row % 2 === 1;
    const isLastInRow = isReverseRow ? col === 0 : col === NODES_PER_ROW - 1;

    const nodeTop = TOP_PADDING + row * (NODE_HEIGHT + ROW_SPACING);
    const nodeLeft = LEFT_PADDING + col * (NODE_WIDTH + COL_SPACING);

    const lineYStart = isLastInRow
      ? nodeTop + NODE_HEIGHT
      : nodeTop + NODE_HEIGHT / 2;

    const lineYEnd = isLastInRow ? lineYStart + ROW_SPACING : lineYStart;

    let lineXStart = 0;
    let lineXEnd = 0;
    if (isLastInRow) {
      lineXStart = nodeLeft + NODE_WIDTH / 2;
      lineXEnd = lineXStart;
    } else if (isReverseRow) {
      lineXStart = nodeLeft - COL_SPACING;
      lineXEnd = nodeLeft;
    } else {
      lineXStart = nodeLeft + NODE_WIDTH;
      lineXEnd = lineXStart + COL_SPACING;
    }

    return {
      nodeTop,
      nodeLeft,
      lineYStart,
      lineYEnd,
      lineXStart,
      lineXEnd,
    };
  };

  const renderLine = (positions) => {
    return positions.lineXStart === positions.lineXEnd ? (
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
    );
  };

  const renderNode = (i, node) => {
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
        {i < nodes.length - 1 && renderLine(positions)}
      </React.Fragment>
    );
  };

  return (
    <Container>
      <span>Node Editor</span>
      {nodes.length > 0 ? (
        nodes.map((node, i) => renderNode(i, node))
      ) : (
        <NoNodes />
      )}
    </Container>
  );
};
