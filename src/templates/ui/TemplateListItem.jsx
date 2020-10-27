import PropTypes from 'prop-types';
import React from 'react';

import { ListItem } from '../../common/ui';

export const TemplateListItem = ({ template }) => {
  return (
    <ListItem
      primaryText={template.name}
      secondaryText={template.description}
    />
  );
};

TemplateListItem.propTypes = {
  template: PropTypes.object,
};
