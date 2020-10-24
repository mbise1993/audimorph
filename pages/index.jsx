import React from 'react';
import styled from 'styled-components';

import { AppHeader } from '../src/root/ui/AppHeader';
import { Editor } from '../src/editor/ui/Editor';
import { Templates } from '../src/templates/ui/Templates';
import { theme } from '../src/common/ui';

const Container = styled.main`
  height: 100vh;
  display: grid;
  grid:
    [row1-start] 'header header' 40px [row1-end]
    [row2-start] 'templates editor' 1fr [row2-end]
    / 300px auto;
`;

const HeaderArea = styled.div`
  grid-area: header;
`;

const EditorArea = styled.div`
  grid-area: editor;
`;

const TemplatesArea = styled.div`
  grid-area: templates;
  border-left: 1px solid ${theme.semanticColors.bodyDivider};
`;

function App() {
  return (
    <Container>
      <HeaderArea>
        <AppHeader />
      </HeaderArea>
      <TemplatesArea>
        <Templates />
      </TemplatesArea>
      <EditorArea>
        <Editor />
      </EditorArea>
    </Container>
  );
}

export default App;
