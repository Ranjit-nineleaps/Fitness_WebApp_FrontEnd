import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Textfield from '../../Components/Inputs/TextFieldWrapper';
import PasswordTextfield from '../../Components/Inputs/PasswordTextfield';
import Checkbox from '../../Components/Inputs/FormCheckbox';
import Button from '../../Components/Inputs/FormButton';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
  },
}));

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const specialCharacterRegex = /(?=.*[!@#\$%\^&\*])/;

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword:'',
  registration: null,
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
  password: Yup.string()
    .matches(lowercaseRegex, 'One lowercase required!')
    .matches(uppercaseRegex, 'One uppercase required!')
    .matches(numericRegex, 'One number required!')
    .matches(specialCharacterRegex, 'One special character required!')
    .min(8,'Minimum 8 Characters required!')
    .required('Required!'),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password')], 'Password must be the same!')
  .required('Required!'),
  tnc: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
});

const handleClick = () => {
  window.location="/login"
}

function SignupVendor(){
  const classes = useStyles();
  return (
      
    
      <Grid container>
        <Grid item xs={12}>
        <h3>Fitness-Freak</h3>
          <Container maxWidth="md">
            <div className={classes.formWrapper}>

              <Formik
                initialValues={{...initialValues}}
                validationSchema={validationSchema}
                onSubmit={async(values) => {
                  
                  const data = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email:values.email,
                    password: values.password
                  };
                
                  const axiosConfig = {
                    headers: {
                      'Content-Type' : 'application/json'
                    },
                  };

                  await Axios.post(
                    'https://nineleaps-fitness.herokuapp.com/register/vendor',
                    data,
                    axiosConfig
                  )
                  .then((response)=>{
                    //console.log("Successful!!!",response);
                    if(response.data.email){
                      swal("Success!!!", "You are now a Registered User", "success")
                      window.location="/login"
                    } else{
                      swal("Failed!!!", "You are Already a Registered User", "error")
                    }
                  })
                  .catch((err) =>{
                    console.error("Error",err)
                  });
              }
              }
              >
                {({values, isSubmitting})=>(
                <Form
                  method="POST"
                  className="signupform"
                  >

                  <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                      <Typography>
                        Vendor Registration Form
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield
                        id="firstName"
                        name="firstName"
                        label="First Name"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield
                        id="email"
                        name="email"
                        label="E-Mail ID"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <PasswordTextfield 
                        id="password"
                        name="password"
                        label="Password"                                  
                        />   
                    </Grid>

                    <Grid item xs={6}>
                      <PasswordTextfield 
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm-Password"                                  
                        />   
                    </Grid>

                    <Grid item xs={12}>
                      <Checkbox
                        name="tnc"
                        legend="Terms and Conditions"
                        label="I agree to the Terms of Agreement"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button>
                        Submit
                      </Button>
                      <div>
                      
                    </div>
                    </Grid>
                    

                  </Grid>

                </Form>
                )}
              </Formik>

            </div>
          </Container>
          <div>
          <h2>Already have an Account?</h2>
          <button onClick={handleClick}>Log In</button>
        </div>
        </Grid>
      </Grid>
      
    
    );
  };

  export default SignupVendor ;
