import React from 'react';
import { withSSRContext } from 'aws-amplify';

import { AppHeader } from '../src/components/root/AppHeader';
import { Editor } from '../src/components/editor/Editor';
import { EditorState } from '../src/state/editorState';
import { listTemplates } from '../src/graphql/queries';
import { Templates } from '../src/components/templates/Templates';

export async function getServerSideProps({ req }) {
  const ssr = withSSRContext({ req });
  const response = await ssr.API.graphql({ query: listTemplates });

  return {
    props: {
      templates: response.data.listTemplates.items,
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
