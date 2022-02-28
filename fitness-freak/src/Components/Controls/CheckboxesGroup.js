// import * as React from 'react';
// import { 
//   Checkbox,
//   FormControl, 
//   FormControlLabel, 
//   FormGroup, 
//   FormLabel,
//   FormHelperText } from '@material-ui/core';
// import { useField, useFormikContext } from 'formik';

// const CheckboxesGroup = ({
//   name,
//   label,
//   legend,
//   ...otherProps
// }) => {
  
//   const [state, setState] = React.useState({
//     morning_slot: true,
//     afternoon_slot: false,
//     evening_slot: false,
//   });
//   const { setFieldValue } = useFormikContext();
//   const [field, meta] = useField(name);
//   const { morning_slot, afternoon_slot, evening_slot } = state;
//   const error = [morning_slot, afternoon_slot, evening_slot].filter((v) => v).length < 1;

//   const handleChange = (event) => {
//     setState({
//       ...state,
//       [event.target.name]: event.target.checked,
//     });
//   };

  

//   const configFormControl = {
//         error:{error},
//         component:"fieldset",
//         sx:{ m: 3 },
//         variant:"standard"
//   };
//   if (meta && meta.touched && meta.error) {
//     configFormControl.error = true;
//   } 

//   return (   
//       <FormControl {...configFormControl} >
//         <FormLabel component="legend">Time-Slot</FormLabel>
//         <FormGroup>
//           <FormControlLabel
//             control={
//               <Checkbox checked={morning_slot} onChange={handleChange} name="morning_slot" />
//             }
//             label="Morning Slot [5AM-10AM]"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox checked={afternoon_slot} onChange={handleChange} name="afternoon_slot" />
//             }
//             label="Afternoon Slot [12PM-4PM]"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox checked={evening_slot} onChange={handleChange} name="evening_slot" />
//             }
//             label="Evening Slot [5PM-10PM]"
//           />
//         </FormGroup>
//         <FormHelperText>Select altleast one Slot</FormHelperText>
//       </FormControl>
//   );
// }

// export default CheckboxesGroup;
