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
    fullWidth: true,
    size: 'large'
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
