import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { InputSwitch } from 'primereact/inputswitch';
import { InputText } from 'primereact/inputtext';
import { v4 as uuid } from 'uuid';

import { FlexRow, HorizontalSpacer, PanelHeader, Text } from '../common';
import { nodeTypes } from '../../state/nodeTypes';
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

const SearchContainer = styled.span`
  width: 100%;
`;

const SearchInput = styled(InputText)`
  width: 100%;
`;

export function Templates({ templates }) {
  const [isOnlyMineChecked, setOnlyMineChecked] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  function handleOnlyMineChange(e) {
    setOnlyMineChecked(e.value);
  }

  function handleSearchTextChange(e) {
    setSearchText(e.target.value);
  }

  const headerActions = (
    <FlexRow align="center">
      <Text size="sm" color="secondary">
        Only Mine
      </Text>
      <HorizontalSpacer size="0.5em" />
      <InputSwitch
        checked={isOnlyMineChecked}
        onChange={handleOnlyMineChange}
      />
    </FlexRow>
  );

  return (
    <div>
      <PanelHeader height="2.75em" title="Templates" actions={headerActions} />
      <SearchContainer className="p-input-icon-left">
        <i className="pi pi-search" />
        <SearchInput
          className="p-inputtext-sm"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </SearchContainer>
      {templates.map((template) => (
        <TemplateListItem key={template.id} template={template} />
      ))}
    </div>
  );
}

Templates.propTypes = {
  templates: PropTypes.arrayOf(PropTypes.object).isRequired,
};
