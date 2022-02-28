import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import swal from "sweetalert";
import Controls from "../../Components/Controls";
import controls from "../../Components/Controls";

const handleClick = () => {
  window.location = "/SignupVendor";
};

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
  },
}));

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("Required"),
  password: Yup.string()
    .min(8, "Password should be atleast 8 Characters")
    .required("Required!"),
});

function Login() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <h3>Fitness-Freak</h3>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ ...initialValues }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                const data = {
                  email: values.email,
                  password: values.password,
                };

                const axiosConfig = {
                  headers: {
                    "Content-Type": "application/json",
                  },
                };

                await Axios.post(
                  "https://nineleaps-fitness.herokuapp.com/login/vendor",
                  data,
                  axiosConfig
                )
                  .then((response) => {
                    //console.log("Successful!!!",response);
                    if (response.data.email) {
                      swal("Success!!!", "Welcome to Fitness-Freak", "success");
                      window.location = "/VendorDashboard";
                    } else {
                      swal(
                        "Failed!!!",
                        "Check Your Credentials Again",
                        "error"
                      );
                    }
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              }}
            >
              {({ values, isSubmitting }) => (
                <Form method="POST" className="signupform">
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography>LogIn Form</Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Controls.Textfield
                        id="email"
                        name="email"
                        label="E-Mail ID"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Controls.PasswordTextfield
                        id="password"
                        name="password"
                        label="Password"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Controls.FormButton disabled={!values || !isSubmitting}>
                        Submit
                      </Controls.FormButton>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
        <div>
          <h2>Don't have an Account?</h2>
          <Controls.FieldButton
            onClick={() => {
              window.location = "/SignupVendor";
            }}
          >
            Sign up
          </Controls.FieldButton>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
