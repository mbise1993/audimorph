import PropTypes from 'prop-types';
import React from 'react';

import { AppHeader } from '../client/components/root/AppHeader';
import { Editor } from '../client/components/editor/Editor';
import { EditorState } from '../client/state/editorState';
import { fetcher } from '../client/utils/fetcher';
import { Templates } from '../client/components/templates/Templates';

export async function getStaticProps() {
  const templates = await fetcher('/api/templates');

  return {
    props: {
      templates,
    },
  };
}

export default function Index({ templates = [] }) {
  return (
    <EditorState.Provider>
      <div className="grid-container">
        <div className="area-header">
          <AppHeader />
        </div>
        <div className="area-templates">
          <Templates templates={templates} />
        </div>
        <div className="area-editor">
          <Editor />
        </div>
      </div>
    </EditorState.Provider>
  );
}

Index.propTypes = {
  templates: PropTypes.arrayOf(PropTypes.object),
};
