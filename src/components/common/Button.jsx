import PropTypes from 'prop-types';
import React from 'react';
import { Button as PrimeButton } from 'primereact/button';

const VARIANTS = {
  default: '',
  rounded: 'p-button-rounded',
  text: 'p-button-text',
};

const SIZES = {
  default: '',
  sm: 'p-button-sm',
  lg: 'p-button-lg',
};

export const Button = ({
  variant = 'default',
  outlined = false,
  size = 'default',
  loading,
  icon,
  className,
  children,
  ...rest
}) => {
  const classes = [VARIANTS[variant], SIZES[size]];
  if (outlined) {
    classes.push('p-button-outlined');
  }

  const iconClass = icon ? `pi pi-${icon}` : undefined;

  return (
    <PrimeButton
      icon={iconClass}
      className={[classes, className]}
      label={children}
      {...rest}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  outlined: PropTypes.bool,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};
