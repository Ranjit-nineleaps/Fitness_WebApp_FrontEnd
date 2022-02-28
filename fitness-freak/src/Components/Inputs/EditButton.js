import React from 'react';
import { Button } from '@material-ui/core';


const ButtonWrapper = ({
  startIcon,
  children,
  endIcon,
  ...otherProps
}) => {

  const configButton = {
    variant: 'outlined',
    color: 'primary',
    fullWidth: false,
    size: 'string'
  }

  return (
    <Button
      {...configButton}
    >
      {startIcon}
      {children}
      {endIcon}
    </Button>
  );
};

export default ButtonWrapper;
