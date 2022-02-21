import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Textfield from '../../Components/FormsUI/TextFieldWrapper';
import PasswordTextfield from '../../Components/FormsUI/PasswordTextfield';
import Checkbox from '../../Components/FormsUI/FormCheckbox';
import Button from '../../Components/FormsUI/FormButton';
import swal from 'sweetalert';

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
  password: '',
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
                  // 'https://nineleaps-fitness.herokuapp.com/register/vendor',
                  data,
                  axiosConfig
                )
                .then((response)=>{
                  //console.log("Successful!!!",response);
                  if(response.data.email){
                    swal("Success!!!", "You are now a Registered User", "success")
                  } else{
                    swal("Failed!!!", "You are Already a Registered User", "error")
                  }
                })
                .catch((err) =>{
                  console.error("Error",err)
                });
            }}
            >
              {({values, isSubmitting})=>(
              <Form
                method="POST"
                className="signupform"
                >

                <Grid container spacing={2}>
                  
                  <Grid item xs={12}>
                    <Typography>
                      Fitness-Enthusiast Registration Form
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

                  <Grid item xs={12}>
                    <PasswordTextfield 
                      id="password"
                      name="password"
                      label="Password"                                  
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
                  </Grid>

                </Grid>

              </Form>
              )}
            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SignupUser ;
