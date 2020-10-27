import produce from 'immer';
import React from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import { AddNodeButton } from './AddNodeButton';
import { Button, FlexRow, HorizontalSpacer, Text } from '../../common/ui';
import { calcElementPositions } from './nodes/nodeUtils';
import { NodeCard } from './nodes/NodeCard';
import { nodeTypes } from '../models/nodeTypes';
import { NoNodes } from './NoNodes';
import { NoteMapperNode } from './nodes/NoteMapperNode';
import { QuantizeNode } from './nodes/QuantizeNode';
import { VelocityNode } from './nodes/VelocityNode';

const NODES = [
  {
    id: uuid(),
    title: nodeTypes.noteMapper.name,
    component: <NoteMapperNode />,
  },
  {
    id: uuid(),
    title: nodeTypes.velocity.name,
    component: <VelocityNode />,
  },
];

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 12px 20px;
`;

const NodesContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const HorizontalLine = styled.div`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.xStart}px;
  width: ${(props) => props.xEnd - props.xStart}px;
  height: 1px;
  background-color: var(--text-color-secondary);
`;

const VerticalLine = styled.div`
  position: absolute;
  top: ${(props) => props.yStart}px;
  left: ${(props) => props.x}px;
  height: ${(props) => props.yEnd - props.yStart}px;
  width: 1px;
  background-color: var(--text-color-secondary);
`;

export const Editor = () => {
  const [nodes, setNodes] = React.useState(NODES);

  const handleAddClick = (index, type) => {
    let newNode;
    switch (type) {
      case nodeTypes.noteMapper.id:
        newNode = {
          id: uuid(),
          title: nodeTypes.noteMapper.name,
          component: <NoteMapperNode />,
        };
        break;
      case nodeTypes.velocity.id:
        newNode = {
          id: uuid(),
          title: nodeTypes.velocity.name,
          component: <div>Velocity</div>,
        };
        break;
      case nodeTypes.quantize.id:
        newNode = {
          id: uuid(),
          title: nodeTypes.quantize.name,
          component: <QuantizeNode />,
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
      />
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
          description={node.title}
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
      <FlexRow justify="space-between">
        <Text size="lg">Node Editor</Text>
        <div>
          <Button variant="rounded" outlined>
            Run
          </Button>
          <HorizontalSpacer size="0.75em" />
          <Button variant="rounded" outlined>
            Save as Template
          </Button>
        </div>
      </FlexRow>
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
