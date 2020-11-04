import React from 'react';

import { Button, FlexColumn, Text, VerticalSpacer } from '../common';
import { EditorState } from '../../state/editorState';
import { templateFactory } from '../../services/templateFactory';

export const NoNodes = () => {
  const editorState = EditorState.useContainer();

  const handleAddClick = () => {
    const newTemplate = templateFactory.createDefaultTemplate();
    editorState.setCurrentTemplate(newTemplate);
  };

  return (
    <FlexColumn height="75%" align="center" justify="center">
      <Text size="lg">It&apos;s empty in here :(</Text>
      <VerticalSpacer size="0.5em" />
      <Text>Add a node to get started</Text>
      <VerticalSpacer size="1em" />
      <Button onClick={handleAddClick}>Add Node</Button>
    </FlexColumn>
  );
};
