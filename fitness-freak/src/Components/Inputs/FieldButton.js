import React from 'react';
import { Button } from '@material-ui/core';

const ButtonWrapper = ({
  startIcon,
  children,
  endIcon,
  onClick,
  ...otherProps
}) => {

  const configButton = {
    variant: 'outlined',
    color: 'primary',
    fullWidth: true,
    size: 'large',
    onClick
  }

  return (
    <Button
      {...configButton}
    >
      {startIcon}
      &nbsp;&nbsp;{children}&nbsp;&nbsp;
      {endIcon}
    </Button>
  );
};

export default ButtonWrapper;
