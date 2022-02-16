import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Textfield from '../../Components/FormsUI/TextFieldWrapper';
import DateTimePicker from '../../Components/FormsUI/DatePicker';
import SelectGender from '../../Components/FormsUI/SelectGender';
import PasswordTextfield from '../../Components/FormsUI/PasswordTextfield';
import Checkbox from '../../Components/FormsUI/FormCheckbox';
import Button from '../../Components/FormsUI/FormButton';
import gender from '../../Data/gender.json';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
  },
}));

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  dob: '',
  gender: '',
  pswd: '',
  cnfPswd: '',
  tnc: false
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Required'),
  phone: Yup.number()
    .integer()
    .typeError('Invalid phone number')
    .required('Required'),
  address: Yup.string()
    .required('Required'),
  dob: Yup.date()
    .required('Required'),
  gender: Yup.string()
    .required('Required'),
  pswd: Yup.string()
    .min(8,'Password should be atleast 8 Characters')
    .required('Required!'),
  cnfPswd: Yup.string()
    .min(8,'Password should be atleast 8 Characters')
    .required('Required!'),
  tnc: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
});

function SignupUser(){
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
      <h3>Fitness-Enthusiast Registration Form</h3>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={{...initialValues}}
              validationSchema={validationSchema}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form>

                <Grid container spacing={2}>
                  
                  <Grid item xs={12}>
                    <Typography>
                      Basic details
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="firstName"
                      label="First Name"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="lastName"
                      label="Last Name"
                    />
                  </Grid>

                  <Grid item xs={7}>
                    <Textfield
                      name="email"
                      label="E-Mail ID"
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <Textfield
                      name="phone"
                      label="Phone Number"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="address"
                      label="Address"
                      multiline={true}
                      rows={2}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name="dob"
                      label="Date of Birth"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectGender
                      name="gender"
                      label="Gender"
                      options={gender}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Credentials Entry
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <PasswordTextfield 
                      name='pswd' 
                      label='Password'                                    
                      />   
                  </Grid>

                  <Grid item xs={6}>
                    <PasswordTextfield 
                      name='cnfPswd' 
                      label='Confirm Password'                                    
                      />   
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox
                      name="tnc"
                      legend="Terms and Conditions"
                      label="I agree to the Terms Agreement"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button>
                      Submit
                    </Button>
                  </Grid>

                </Grid>

              </Form>
            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SignupUser;
