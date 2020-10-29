import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import { Amplify } from 'aws-amplify';

import './_app.css';

import awsExports from '../src/aws-exports';
import { AuthState } from '../src/state/authState';

Amplify.configure({
  ...awsExports,
  ssr: true,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="MIDI transformer" />
        <meta name="keywords" content="Audio, MIDI" />
        <meta name="theme-color" content="#64B5F6" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"></link>

        <title>AudiMorph | MIDI Transformer</title>
      </Head>
      <AuthState.Provider>
        <Component {...pageProps} />
      </AuthState.Provider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};
