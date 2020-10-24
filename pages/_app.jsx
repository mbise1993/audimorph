import PropTypes from 'prop-types';
import React from 'react';
import { initializeIcons } from '@uifabric/icons';

import './app.scss';

initializeIcons();

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default App;
