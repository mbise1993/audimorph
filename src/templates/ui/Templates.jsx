import React from 'react';
import { v4 as uuid } from 'uuid';

import { PanelHeader } from '../../common/ui';
import { TemplateListItem } from './TemplateListItem';

const TEMPLATES = [
  {
    id: uuid(),
    name: 'Map SD3 to GM',
    description: 'Map Superior Drummer 3 notes to General MIDI',
  },
  {
    id: uuid(),
    name: 'Humanize Velocity',
    description: 'Randomize and humanize note velocities',
  },
];

export const Templates = () => {
  const [templates, setTemplates] = React.useState(TEMPLATES);

  return (
    <div>
      <PanelHeader title="Templates" />
      {templates.map((template) => (
        <TemplateListItem key={templates.id} template={template} />
      ))}
    </div>
  );
};
