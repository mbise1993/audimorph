import React from 'react';
import { PrimaryButton, Text } from '@fluentui/react';

import { FlexColumn, VerticalSpacer } from '../../common/ui';

export const NoNodes = () => {
  return (
    <FlexColumn height="75%" center="both">
      <Text block variant="xLarge">
        It&apos;s empty in here :(
      </Text>
      <VerticalSpacer size="s1" />
      <Text block>Add a node to get started</Text>
      <VerticalSpacer size="s1" />
      <PrimaryButton text="Add Node" />
    </FlexColumn>
  );
};
