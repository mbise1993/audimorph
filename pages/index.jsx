import React from 'react';

import { AppHeader } from '../src/root/ui/AppHeader';
import { CommonHead } from '../src/common/ui';
import { Editor } from '../src/editor/ui/Editor';
import { EditorState } from '../src/editor/state/editorState';
import { Templates } from '../src/templates/ui/Templates';

function Index() {
  return (
    <EditorState.Provider>
      <CommonHead title="AudiMorph | MIDI transformer" />
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

export default Index;
