import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { PrimaryButton as Button, DirectionalHint } from '@fluentui/react';

import { ADD_BUTTON_SIZE } from './nodes/nodeUtils';

const StyledButton = styled(Button)`
  position: absolute;
  padding: 0px;
  height: ${ADD_BUTTON_SIZE}px;
  width: ${ADD_BUTTON_SIZE}px;
  min-width: ${ADD_BUTTON_SIZE}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;

const MENU_ITEMS = [
  {
    key: 'note-mapper',
    text: 'Note Mapper',
  },
  {
    key: 'velocity',
    text: 'Velocity',
  },
  {
    key: 'quantization',
    text: 'Quantization',
  },
];

export const AddNodeButton = ({ onAddNode, ...rest }) => {
  const buttonRef = React.useRef(null);

  const menuProps = React.useMemo(() => {
    return {
      isBeakVisible: true,
      directionalHint: DirectionalHint.bottomCenter,
      gapSpace: 0,
      beakWidth: 20,
      directionalHintFixed: false,
      items: MENU_ITEMS,
      onItemClick: (e, item) => onAddNode(item.key),
    };
  }, [onAddNode]);

  return (
    <StyledButton
      ref={buttonRef}
      text="+"
      split={false}
      menuProps={menuProps}
      onRenderMenuIcon={() => null}
      onClick={() => {}}
      {...rest}
    />
  );
};

AddNodeButton.propTypes = {
  onAddNode: PropTypes.func,
};
