import React from 'react';
import { createContainer } from 'unstated-next';

const useAppState = (initialTemplate) => {
  const [currentTemplate, setCurrentTemplate] = React.useState(initialTemplate);

  return {
    currentTemplate,
    setCurrentTemplate,
  };
};

export const AppState = createContainer(useAppState);
