import React from 'react';

import { AppHeader } from '../src/root/ui/AppHeader';
import { Editor } from '../src/editor/ui/Editor';
import { Templates } from '../src/templates/ui/Templates';

function App() {
  return (
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
  );
}

export default App;
