import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Textfield from '../../Components/FormsUI/TextFieldWrapper';
import PasswordTextfield from '../../Components/FormsUI/PasswordTextfield';
import Button from '../../Components/FormsUI/FormButton';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
}));

const initialValues = {
  email: '',
  pswd: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('Required'),
  pswd: Yup.string()
    .min(8,'Password should be atleast 8 Characters')
    .required('Required!')
});

function SignupUser(){
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6}>
      <h3>Fitness-Freak</h3>
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
                      LogIn
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="email"
                      label="E-Mail ID"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <PasswordTextfield 
                      name='pswd' 
                      label='Password'                                    
                      />   
                  </Grid>

                  <Grid item xs={12}>
                    <Button>
                      LogIn
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
