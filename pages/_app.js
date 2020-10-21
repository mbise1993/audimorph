import React from 'react';

import { initBackendless } from '../utils/initBackendless';

import './app.scss';

initBackendless();

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
