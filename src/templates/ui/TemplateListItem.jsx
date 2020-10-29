import PropTypes from 'prop-types';
import React from 'react';

import { AppState } from '../../root/state/appState';
import { ListItem } from '../../common/ui';
import { useConfirmation } from '../../common/hooks';

export const TemplateListItem = ({ template }) => {
  const appState = AppState.useContainer();
  const confirmationDialog = useConfirmation({
    headerText: `Use Template "${template.name}"?`,
    bodyText: `Are you sure you want to use this template? All your current changes will be lost.`,
    onConfirm: () => {
      appState.setCurrentTemplate(template);
    },
  });

  return (
    <>
      <ListItem
        primaryText={template.name}
        secondaryText={template.description}
        onClick={() => confirmationDialog.setOpen(true)}
      />

      <confirmationDialog.Component />
    </>
  );
};

TemplateListItem.propTypes = {
  template: PropTypes.object,
};
