import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuid } from 'uuid';

import { nodeTypes } from '../../state/nodeTypes';
import { PanelHeader } from '../common';
import { TemplateListItem } from './TemplateListItem';

const TEMPLATES = [
  {
    id: uuid(),
    name: 'Map SD3 to GM',
    description: 'Map Superior Drummer 3 notes to General MIDI',
    nodes: [
      {
        id: uuid(),
        type: nodeTypes.noteMapper.id,
        name: 'Note Mapper',
        description: '15 note mappings',
      },
    ],
  },
  {
    id: uuid(),
    name: 'Humanize Notes',
    description: 'Randomize and humanize notes',
    nodes: [
      {
        id: uuid(),
        type: nodeTypes.velocity.id,
        name: 'Velocity',
        description: '+/- 10% (randomized)',
      },
      {
        id: uuid(),
        type: nodeTypes.quantize.id,
        name: 'Quantize',
        description: '+/- 5% (randomized)',
      },
    ],
  },
];

export function Templates({ templates }) {
  return (
    <div>
      <PanelHeader title="Templates" />
      {templates.map((template) => (
        <TemplateListItem key={template.id} template={template} />
      ))}
    </div>
  );
}

Templates.propTypes = {
  templates: PropTypes.arrayOf(PropTypes.object).isRequired,
};
