import PropTypes from 'prop-types';
import React from 'react';
import { initializeIcons } from '@uifabric/icons';

import './app.scss';

function App({ Component, pageProps }) {
  initializeIcons();
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default App;
