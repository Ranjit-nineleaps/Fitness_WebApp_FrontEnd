import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

const TimePicker = ({
  name,
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  const configDatePicker = {
    ...field,
    ...otherProps,
    type: 'time',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    },
    inputProps:{
      step: 300
    }
  };

  if(meta && meta.touched && meta.error) {
    configDatePicker.error = true;
    configDatePicker.helperText = meta.error;
  }

  return (
    <TextField
      {...configDatePicker}
    />
  );
};

export default TimePicker;
