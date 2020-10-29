import produce from 'immer';
import React from 'react';
import styled from 'styled-components';

import { AddNodeButton } from './AddNodeButton';
import { Button, FlexRow, HorizontalSpacer, Text } from '../../common/ui';
import { calcElementPositions } from './nodes/nodeUtils';
import { EditorState } from '../state/editorState';
import { NodeCard } from './nodes/NodeCard';
import { nodeFactory } from '../state/nodeFactory';
import { NoNodes } from './NoNodes';

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
  const editorState = EditorState.useContainer();

  const handleAddClick = (index, type) => {
    const newNode = nodeFactory.createNodeFromType(type);
    editorState.addNode(newNode, index);
  };

  const handleDeleteClick = (index) => {
    editorState.deleteNode(index);
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
    const isLastNode = index === editorState.nodes.length - 1;

    return (
      <React.Fragment key={node.id}>
        <NodeCard
          node={node}
          top={positions.nodeTop}
          left={positions.nodeLeft}
          onDeleteClick={() => handleDeleteClick(index)}
        />
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
        <div>
          <Text size="lg">Node Editor</Text>
          &nbsp;&nbsp;
          {editorState.currentTemplate && (
            <Text size="md" color="secondary">
              Template: {editorState.currentTemplate.name}
            </Text>
          )}
        </div>
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

      {editorState.nodes.length > 0 ? (
        <NodesContainer>
          {editorState.nodes.map((node, i) => renderNode(i, node))}
        </NodesContainer>
      ) : (
        <NoNodes />
      )}
    </Container>
  );
};
