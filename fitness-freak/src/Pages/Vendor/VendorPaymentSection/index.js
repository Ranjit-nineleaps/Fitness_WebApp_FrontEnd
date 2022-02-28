import React from "react";
import './index.css';
import { makeStyles } from "@material-ui/core";
import { Container, Grid, Typography } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Navbar from "../../../Components/Navbar";
import Controls from "../../../Components/Controls";
import paymentSchedules from "../../../Data/paymentSchedule.json";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
  },
}));

const initialValues = {
  email: "",
  fullName: "",
  bankName: "",
  branchName: "",
  bankAccount: "",
  ifsc: "",
  confirmBankAccount: "",
  paymentSchedule: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("Required"),
  fullName: Yup.string().required("Required"),
  bankName: Yup.string().required("Required"),
  branchName: Yup.string().required("Required"),
  bankAccount: Yup.number().required("Required"),
  ifsc: Yup.string().required("Required"),
  confirmBankAccount: Yup.number().oneOf(
    [Yup.ref("bankAccount")],
    "Bank Account No. must be same!"
  ),
  paymentSchedule: Yup.string().required("Required"),
});

function VendorPayment() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Container maxwidth="md">
            <div className={classes.formWrapper}>
              <Formik
                initialValues={{ ...initialValues }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography>Payment-Section</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Controls.Textfield name="email" label="Email-ID" />
                    </Grid>
                    <Grid item xs={12}>
                      <Controls.Textfield name="fullName" label="Full Name" />
                    </Grid>
                    <Grid item xs={5}>
                      <Controls.Textfield name="bankName" label="Bank Name" />
                    </Grid>
                    <Grid item xs={4}>
                      <Controls.Textfield name="branchName" label="Branch Name" />
                    </Grid>
                    <Grid item xs={3}>
                      <Controls.Textfield name="ifsc" label="IFSC" />
                    </Grid>
                    <Grid item xs={6}>
                      <Controls.Textfield
                        type="number"
                        name="bankAccount"
                        label="Account No."
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Controls.Textfield
                        type="number"
                        name="confirmBankAccount"
                        label="Confirm Account No."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Controls.Select
                        name="paymentSchedule"
                        label="Payment Schedule"
                        options={paymentSchedules}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Controls.FormButton>Submit</Controls.FormButton>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
export default VendorPayment;
