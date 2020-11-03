import React from 'react';

import { AppHeader } from '../client/components/root/AppHeader';
import { Editor } from '../client/components/editor/Editor';
import { EditorState } from '../client/state/editorState';
import { Templates } from '../client/components/templates/Templates';

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
