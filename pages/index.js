import Head from 'next/head';
import React from 'react';
import { Text } from '@fluentui/react';

import { Layout } from '../components/common';
import { NodePicker } from '../components/nodePicker/nodePicker';

export default function Home() {
  return (
    <Layout.ViewPort>
      <Head>
        <title>AudiMorph</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout.Top size="40px" padding="8px">
        <Text variant="xLarge">AudiMorph</Text>
      </Layout.Top>

      <Layout.Fill>
        <Layout.Left size="40px">
          <NodePicker />
        </Layout.Left>
      </Layout.Fill>

      <Layout.Bottom size="40px" padding="8px">
        Created by Matt Bise
      </Layout.Bottom>
    </Layout.ViewPort>
  );
}
