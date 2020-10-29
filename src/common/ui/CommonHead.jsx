import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

export const CommonHead = ({ title }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title}</title>
    </Head>
  );
};

CommonHead.propTypes = {
  title: PropTypes.string.isRequired,
};
