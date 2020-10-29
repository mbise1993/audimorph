import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { InputSwitch } from 'primereact/inputswitch';
import { InputText } from 'primereact/inputtext';
import { v4 as uuid } from 'uuid';

import { FlexRow, HorizontalSpacer, Text } from '../common';
import { nodeTypes } from '../../state/nodeTypes';
import { searchTemplates } from '../../api/templates';
import { TemplateListItem } from './TemplateListItem';
import { useDebounce } from '../../hooks/useDebounce';

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

const Header = styled.div`
  padding: 0.5em 0.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.span`
  width: 100%;
`;

const SearchInput = styled(InputText)`
  width: 100%;
`;

export function Templates({ templates }) {
  const [templateResults, setTemplateResults] = React.useState(templates);
  const [isOnlyMineChecked, setOnlyMineChecked] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [isLoadingTemplates, setLoadingTemplates] = React.useState(false);

  React.useEffect(() => {
    async function search() {
      try {
        setLoadingTemplates(true);
        const results = await searchTemplates(debouncedSearchTerm);
        setTemplateResults(results || []);
      } finally {
        setLoadingTemplates(false);
      }
    }

    search();
  }, [debouncedSearchTerm]);

  const handleOnlyMineChange = React.useCallback((e) => {
    setOnlyMineChecked(e.value);
  }, []);

  const handleSearchTextChange = React.useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

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
      <Header title="Templates" actions={headerActions}>
        <div>
          <Text>Templates</Text>
          <HorizontalSpacer size="0.5em" />
          {isLoadingTemplates && <i className="pi pi-spin pi-spinner" />}
        </div>
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
      </Header>

      <SearchContainer className="p-input-icon-left">
        <i className="pi pi-search" />
        <SearchInput
          className="p-inputtext-sm"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchTextChange}
        />
      </SearchContainer>

      {templateResults.map((template) => (
        <TemplateListItem key={template.id} template={template} />
      ))}
    </div>
  );
}

Templates.propTypes = {
  templates: PropTypes.arrayOf(PropTypes.object).isRequired,
};
