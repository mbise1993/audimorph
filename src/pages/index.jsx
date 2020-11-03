import React from 'react';

import { AppHeader } from '../components/root/AppHeader';
import { Editor } from '../components/editor/Editor';
import { EditorState } from '../state/editorState';
import { Templates } from '../components/templates/Templates';

export default function Index() {
  return (
    <EditorState.Provider>
      <div className="grid-container">
        <div className="area-header">
          <AppHeader />
        </div>
        <div className="area-templates">
          <Templates />
        </div>
        <div className="area-editor">
          <Editor />
        </div>
      </div>
    </EditorState.Provider>
  );
}
