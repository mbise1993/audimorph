import produce from 'immer';
import React from 'react';
import { createContainer } from 'unstated-next';

function useEditorState(defaultTemplate = null) {
  const [currentTemplate, setCurrentTemplate] = React.useState(defaultTemplate);
  const [nodes, setNodes] = React.useState(
    defaultTemplate ? defaultTemplate.nodes : [],
  );

  React.useEffect(() => {
    if (currentTemplate) {
      setNodes(currentTemplate.nodes);
    }
  }, [currentTemplate]);

  const addNode = (node, index) => {
    const newNodes = produce(nodes, (draft) => {
      if (index === 0) {
        draft.unshift(node);
      } else if (index === nodes.length) {
        draft.push(node);
      } else {
        draft.splice(index, 0, node);
      }
    });

    setNodes(newNodes);
  };

  const deleteNode = (index) => {
    const newNodes = produce(nodes, (draft) => {
      draft.splice(index, 1);
    });

    setNodes(newNodes);
  };

  return {
    currentTemplate,
    setCurrentTemplate,
    nodes,
    addNode,
    deleteNode,
  };
}

export const EditorState = createContainer(useEditorState);
