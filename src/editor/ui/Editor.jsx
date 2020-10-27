import produce from 'immer';
import React from 'react';
import styled from 'styled-components';
import { PrimaryButton, Text } from '@fluentui/react';
import { v4 as uuid } from 'uuid';

import { AddNodeButton } from './AddNodeButton';
import { calcElementPositions } from './nodes/nodeUtils';
import { NodeCard } from './nodes/NodeCard';
import { NoNodes } from './NoNodes';
import { theme } from '../../common/ui';

const NODES = [
  {
    id: uuid(),
    title: 'Note Mapper',
    component: <div>Node Mapper</div>,
  },
  {
    id: uuid(),
    title: 'Velocity',
    component: <div>Velocity</div>,
  },
  {
    id: uuid(),
    title: 'Quanitzation',
    component: <div>Quanitzation</div>,
  },
  {
    id: uuid(),
    title: 'Note Mapper',
    component: <div>Node Mapper</div>,
  },
  {
    id: uuid(),
    title: 'Velocity',
    component: <div>Velocity</div>,
  },
];

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 12px 20px;
  background-color: ${theme.palette.neutralLighter};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NodesContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
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
  const [nodes, setNodes] = React.useState(NODES);

  const handleAddClick = (index, type) => {
    let newNode;
    switch (type) {
      case 'note-mapper':
        newNode = {
          id: uuid(),
          title: 'Note Mapper',
          component: <div>Note Mapper</div>,
        };
        break;
      case 'velocity':
        newNode = {
          id: uuid(),
          title: 'Velocity',
          component: <div>Velocity</div>,
        };
        break;
      case 'quantization':
        newNode = {
          id: uuid(),
          title: 'Quantization',
          component: <div>Quantization</div>,
        };
        break;
    }

    const newNodes = produce(nodes, (draft) => {
      if (index === 0) {
        draft.unshift(newNode);
      } else if (index === nodes.length) {
        draft.push(newNode);
      } else {
        draft.splice(index, 0, newNode);
      }
    });

    setNodes(newNodes);
  };

  const handleDeleteClick = (index) => {
    const newNodes = produce(nodes, (draft) => {
      draft.splice(index, 1);
    });

    setNodes(newNodes);
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

  const renderAddButton = (index, left, top) => {
    return (
      <AddNodeButton
        left={left}
        top={top}
        title="Add a new node at this position"
        onAddNode={(type) => handleAddClick(index, type)}
      >
        +
      </AddNodeButton>
    );
  };

  const renderNode = (index, node) => {
    const positions = calcElementPositions(index);
    const isFirstNode = index === 0;
    const isLastNode = index === nodes.length - 1;

    return (
      <React.Fragment key={node.id}>
        <NodeCard
          title={node.title}
          top={positions.nodeTop}
          left={positions.nodeLeft}
          onDeleteClick={() => handleDeleteClick(index)}
        >
          {node.component}
        </NodeCard>
        {!isLastNode && renderLine(positions)}
        {!isLastNode &&
          renderAddButton(
            index + 1,
            positions.addButtonLeft,
            positions.addButtonTop,
          )}
        {isFirstNode &&
          renderAddButton(
            0,
            positions.firstAddButtonLeft,
            positions.firstAddButtonTop,
          )}
        {isLastNode &&
          renderAddButton(
            index + 1,
            positions.lastAddButtonLeft,
            positions.lastAddButtonTop,
          )}
      </React.Fragment>
    );
  };

  return (
    <Container>
      <Header>
        <Text variant="large">Node Editor</Text>
        <PrimaryButton text="Save as Template" />
      </Header>
      <NodesContainer>
        {nodes.length > 0 ? (
          nodes.map((node, i) => renderNode(i, node))
        ) : (
          <NoNodes onAddNodeClick={handleAddClick(0)} />
        )}
      </NodesContainer>
    </Container>
  );
};
