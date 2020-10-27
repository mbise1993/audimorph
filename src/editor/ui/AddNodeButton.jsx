import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Menu } from 'primereact/menu';

import { ADD_BUTTON_SIZE } from './nodes/nodeUtils';
import { Icon } from '../../common/ui';
import { nodeTypes } from '../models/nodeTypes';

const Button = styled(Icon)`
  position: absolute;
  padding: 0px;
  text-align: center;
  height: ${ADD_BUTTON_SIZE}px;
  width: ${ADD_BUTTON_SIZE}px;
  min-width: ${ADD_BUTTON_SIZE}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  color: var(--primary-color);
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
  const menuRef = React.useRef(null);

  const appendTo = React.useMemo(() => {
    return process.browser ? document.body : null;
  }, []);

  const menuModel = React.useMemo(() => {
    return Object.keys(nodeTypes).map((key) => {
      return {
        label: nodeTypes[key].name,
        command: () => onAddNode(nodeTypes[key].id),
      };
    });
  }, [onAddNode]);

  const handleClick = (e) => {
    if (menuRef.current) {
      menuRef.current.toggle(e);
    }
  };

  return (
    <>
      <Menu
        popup
        ref={menuRef}
        model={menuModel}
        appendTo={appendTo}
        {...rest}
      />
      <Button
        clickable
        className="pi pi-plus-circle"
        onClick={handleClick}
        {...rest}
      />
    </>
  );
};

AddNodeButton.propTypes = {
  onAddNode: PropTypes.func,
};
