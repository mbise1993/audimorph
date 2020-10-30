import React from 'react';

import { AppHeader } from '../src/components/root/AppHeader';
import { Editor } from '../src/components/editor/Editor';
import { EditorState } from '../src/state/editorState';
import { Templates } from '../src/components/templates/Templates';

export async function getServerSideProps({ req }) {
  return {
    props: {
      templates: [],
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
