import PropTypes from 'prop-types';
import React from 'react';

import './_app.css';

import { AppState } from '../src/root/state/appState';

function App({ Component, pageProps }) {
  return (
    <AppState.Provider value={null}>
      <Component {...pageProps} />
    </AppState.Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default App;
