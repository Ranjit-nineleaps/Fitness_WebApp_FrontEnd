import React from "react";
import { useState } from "react";
import { Container, Grid, TextField, Typography } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Textfield from "../../../Components/Inputs/TextFieldWrapper";
import Navbar from "../../../Components/Navbar/Navbar";
import Button from "../../../Components/Inputs/FormButton";
import { makeStyles } from "@material-ui/core";
import FormCheckbox from "../../../Components/Inputs/FormCheckbox";
import TimePicker from "../../../Components/Inputs/TimePicker";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
    marginRight: theme.spacing(2),
  },
}));

const initialValues = {
  fcName: "",
  fcAddress: {
    buildingName: "",
    areaName: "",
    city: "",
    postalCode: "",
  },
  fcFacility: [],
  fcSlot: {
    morning: {
      startTime: "",
      endTime: "",
    },
    afternoon: {
      startTime: "",
      endTime: "",
    },
    evening: {
      startTime: "",
      endTime: "",
    },
  },
  fcSubscription: {
    monthly: "",
    quaterly: "",
    halfYearly: "",
    yearly: "",
    offer: "",
  },
  fcContact: "",
  fcCapacity: "",
  fcPhoto: "",
  tnc: false,
};

const validationSchema = Yup.object().shape({
  fcName: Yup.string().required("Required!"),
  fcAddress: Yup.object().shape({
    buildingName: Yup.string().required("Required!"),
    areaName: Yup.string().required("Required!"),
    city: Yup.string().required("Required!"),
    postalCode: Yup.number().required("Required!").min(6, "Invalid Pincode!"),
  }),
  fcFacility: Yup.array().required("Required!"),
  fcSlot: Yup.object().shape({
    morning: Yup.object().shape({
      startTime: Yup.string(),
      endTime: Yup.string(),
      // .min(Yup.ref('fcSlot.morning.startTime'), "Can't be before start time")
    }),
    afternoon: Yup.object().shape({
      startTime: Yup.string(),
      endTime: Yup.string(),
      // .min(Yup.ref('fcSlot.afternoon.startTime'), "Can't be before start time")
    }),
    evening: Yup.object().shape({
      startTime: Yup.string(),
      endTime: Yup.string(),
      // .min(Yup.ref('fcSlot.evening.startTime'), "Can't be before start time")
    }),
  }),
  fcSubscription: Yup.object().shape({
    monthly: Yup.number().required("Required!"),
    quaterly: Yup.number(),
    halfYearly: Yup.number(),
    yearly: Yup.number(),
    offer: Yup.number(),
  }),
  fcContact: Yup.number().required("Required!"),
  fcCapacity: Yup.number().required("Required!"),
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
              {(formProps) => (
                <Form>
                  <Grid container item spacing={2}>
                    <Grid item xs={6}>
                      <Textfield name="fcName" label="Fitness-Center Name" />
                    </Grid>
                    <Grid item xs={3}>
                      <Textfield
                        type="number"
                        name="fcContact"
                        label="Contact No."
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Textfield
                        type="number"
                        name="fcCapacity"
                        label="Capacity"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <label>Address</label>
                    </Grid>
                    <Grid item xs={4}>
                      <Textfield
                        name="fcAddress.buildingName"
                        label="Building-Name"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Textfield name="fcAddress.areaName" label="Area-Name" />
                    </Grid>
                    <Grid item xs={2}>
                      <Textfield name="fcAddress.city" label="City" />
                    </Grid>
                    <Grid item xs={3}>
                      <Textfield
                        type="number"
                        name="fcAddress.postalCode"
                        label="Postal-Code"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <label>Time-Slots</label>
                    </Grid>
                    <Grid item xs={4}>
                      <label>Morning-Slot</label>
                    </Grid>
                    <Grid item xs={4}>
                      <label>Afternoon-Slot</label>
                    </Grid>
                    <Grid item xs={4}>
                      <label>Evening-Slot</label>
                    </Grid>
                    <Grid item xs={2}>
                      <TimePicker
                        name="fcSlot.morning.startTime"
                        label="Start"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TimePicker name="fcSlot.morning.endTime" label="End" />
                    </Grid>
                    <Grid item xs={2}>
                      <TimePicker
                        name="fcSlot.afternoon.startTime"
                        label="Start"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TimePicker name="fcSlot.afternoon.endTime" label="End" />
                    </Grid>
                    <Grid item xs={2}>
                      <TimePicker
                        name="fcSlot.evening.startTime"
                        label="Star"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TimePicker name="fcSlot.evening.endTime" label="End" />
                    </Grid>

                    <Grid item xs={12}>
                      <label>Subscription-Planner</label>
                    </Grid>
                    <Grid item xs={2}>
                      <Textfield
                        type="number"
                        name="fcSubscription.monthly"
                        label="Monthly"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Textfield
                        type="number"
                        name="fcSubscription.quaterly"
                        label="Quarterly"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Textfield
                        type="number"
                        name="fcSubscription.halfYearly"
                        label="Half Yearly"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Textfield
                        type="number"
                        name="fcSubscription.yearly"
                        label="Yearly"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Textfield
                        type="number"
                        name="fcSubscription.offer"
                        label="Discount"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography id="checkbox-group"> Facilities</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>
                        <Field type="checkbox" name="fcFacility" value="Gym" />
                        Gym
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>
                        <Field
                          type="checkbox"
                          name="fcFacility"
                          value="Zumba"
                        />
                        Zumba
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>
                        <Field
                          type="checkbox"
                          name="fcFacility"
                          value="Dance"
                        />
                        Dance
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>
                        <Field type="checkbox" name="fcFacility" value="Yoga" />
                        Yoga
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>
                        <Field
                          type="checkbox"
                          name="fcFacility"
                          value="Karate"
                        />
                        Karate
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>
                        <Field
                          type="checkbox"
                          name="fcFacility"
                          value="Boxing"
                        />
                        Boxing
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>
                        <Field
                          type="checkbox"
                          name="fcFacility"
                          value="Swimming"
                        />
                        Swimming
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>
                        <Field
                          type="checkbox"
                          name="fcFacility"
                          value="Kids Fitness"
                        />
                        Kids Fitnesss
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <FormCheckbox
                        name="tnc"
                        legend="All the above details are true"
                        label="I hereby declare that the above facts are true to the best of my knowledge"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <input
                        name="fcPhoto"
                        onChange={(event) =>
                          formProps.setFieldValue(
                            "fcPhoto",
                            event.target.files[0]
                          )
                        }
                        type="file"
                        accept="images"
                        // style={{ display: "none" }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Button>ADD</Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </Grid>
    </>
  );
}
export default VendorAddCenter;
