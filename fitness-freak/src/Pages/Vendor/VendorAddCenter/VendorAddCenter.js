import React from "react";
import { Container, Grid, TextField, Typography } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Textfield from "../../../Components/Inputs/TextFieldWrapper";
import Navbar from "../../../Components/Navbar/Navbar";
import Button from "../../../Components/Inputs/FormButton";
import { makeStyles } from "@material-ui/core";
import FormCheckbox from "../../../Components/Inputs/FormCheckbox";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
    marginRight: theme.spacing(2),
  },
}));
const initialValues = {
  fcName: "",
  fcAddress: "",
  fcCapacity: "",
  fcCity: "",
  fcState: "",
  fcPincode: "",
  fcSlot: [],
  fcFacility: [],
  fcSubscription: [],
  tnc: false,
};

const validationSchema = Yup.object().shape({
  fcName: Yup.string().required("Required!"),
  fcAddress: Yup.string().required("Required!"),
  fcCapacity: Yup.number().required("Required!"),
  fcCity: Yup.string().required("Required!"),
  fcState: Yup.string().required("Required!"),
  fcPincode: Yup.number().required("Required!"),
  fcSlot: Yup.array().required("Required!"),
  fcSubscription: Yup.array().required("Required!"),
  tnc: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});
function VendorAddCenter() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container spacing={2}>
        <h3> ADD Fitness-Center Details </h3>
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
                <Grid container item spacing={2}>
                  <Grid item xs={12}>
                    <Textfield name="fcName" label="Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="fcAddress" label="Address" />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield name="fcCity" label="City" />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield name="fcState" label="State" />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield type="number" name="fcPincode" label="Pincode" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="fcSubscription" label="Address" />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography id="checkbox-group"> Facilities</Typography>
                    <Typography>
                      <Field type="checkbox" name="fcFacility" value="Gym" />
                      Gym
                    </Typography>
                    <Typography>
                      <Field type="checkbox" name="fcFacility" value="Zumba" />
                      Zumba
                    </Typography>
                    <Typography>
                      <Field type="checkbox" name="fcFacility" value="Dance" />
                      Dance
                    </Typography>
                    <Typography>
                      <Field
                        type="checkbox"
                        name="fcFacility"
                        value="Pilates"
                      />
                      Pilates
                    </Typography>
                    <Typography>
                      <Field type="checkbox" name="fcFacility" value="Karate" />
                      Karate
                    </Typography>
                    <Typography>
                      <Field type="checkbox" name="fcFacility" value="Boxing" />
                      Boxing
                    </Typography>
                    <Typography>
                      <Field
                        type="checkbox"
                        name="fcFacility"
                        value="Swimming"
                      />
                      Swimming
                    </Typography>
                    <Typography>
                      <Field
                        type="checkbox"
                        name="fcFacility"
                        value="Kids Fitness"
                      />
                      Kids Fitnesss
                    </Typography>
                    <Typography>
                      <Field
                        type="checkbox"
                        name="fcFacility"
                        value="Cross-Functional Training"
                      />
                      Cross-Functional Training
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography id="checkbox-group">Time-Slots</Typography>
                    <Typography>
                      <Field
                        type="checkbox"
                        name="fcSlot"
                        value="Morning Slot [5AM-10AM]"
                      />
                      Morning Slot [5AM-10AM]
                    </Typography>
                    <Typography>
                      <Field
                        type="checkbox"
                        name="fcSlot"
                        value="Afternoon Slot [12PM-4PM]"
                      />
                      Afternoon Slot [12PM-4PM]
                    </Typography>
                    <Typography>
                      <Field
                        type="checkbox"
                        name="fcSlot"
                        value="Evening Slot [5PM-10PM]"
                      />
                      Evening Slot [5PM-10PM]
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Textfield
                      type="number"
                      name="fcCapacity"
                      label="Capacity"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormCheckbox
                      name="tnc"
                      legend="All the above details are true"
                      label="I hereby declare that the above facts are true to the best of my knowledge"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Button>ADD</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </>
  );
}
export default VendorAddCenter;
