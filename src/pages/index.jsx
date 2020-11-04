import PropTypes from 'prop-types';
import React from 'react';

import { AppHeader } from '../components/root/AppHeader';
import { Editor } from '../components/editor/Editor';
import { EditorState } from '../state/editorState';
import { fetcher } from '../utils/fetcher';
import { Templates } from '../components/templates/Templates';

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
