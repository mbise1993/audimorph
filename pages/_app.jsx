import PropTypes from 'prop-types';
import React from 'react';

import './_app.css';

import { AuthState } from '../src/auth/state/authState';

function App({ Component, pageProps }) {
  return (
    <AuthState.Provider>
      <Component {...pageProps} />
    </AuthState.Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default App;
