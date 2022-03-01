import React from "react";
import "./index.css";
import { Container, Grid, Typography } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import Navbar from "../../../Components/Navbar";
import { makeStyles } from "@material-ui/core";
import swal from "sweetalert";
import Controls from "../../../Components/Controls";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
    marginRight: theme.spacing(2),
  },
}));

const initialValues = {
  email: "",
  fcName: "",
  fcAddress: {
    buildingName: "",
    areaName: "",
    city: "",
    postalCode: "",
  },
  fcFacility: [],
  fcSlot: {
    morning: '',
    afternoon: '',
    evening: '',
    weekly_off:''
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
  email: Yup.string().email("Invalid email.").required("Required"),
  fcName: Yup.string().required("Required!"),
  fcAddress: Yup.object().shape({
    buildingName: Yup.string().required("Required!"),
    areaName: Yup.string().required("Required!"),
    city: Yup.string().required("Required!"),
    postalCode: Yup.number().required("Required!").min(6, "Invalid Pincode!"),
  }),
  fcFacility: Yup.array().required("Required!"),
  fcSlot: Yup.object().shape({
    morning: Yup.string().required("Required!"),
    afternoon: Yup.string().required("Required!"),
    evening: Yup.string().required("Required!"),
    weekly_off:Yup.string().required('Required!')
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
              onSubmit={async (values) => {
                const data = {
                  vendor_email: values.email,
                  gym_name: values.fcName,
                  gymAddress: {
                    bulding_name: values.fcAddress.buildingName,
                    area_name: values.fcAddress.areaName,
                    city: values.fcAddress.city,
                    postal_code: values.fcAddress.postalCode
                  },
                  workoutList: values.fcFacility,
                  timing: {
                    morning: values.fcSlot.morning,
                    noon: values.fcSlot.afternoon,
                    evening: values.fcSlot.evening,
                    weekly_off: values.fcSlot.weekly_off
                  },
                  subscription: {
                    monthly: values.fcSubscription.monthly,
                    quaterly: values.fcSubscription.quaterly,
                    half_yearly: values.fcSubscription.halfYearly,
                    yearly: values.fcSubscription.yearly,
                    offer: values.fcSubscription.offer
                  },
                  contact: values.fcContact,
                  capacity: values.fcCapacity,
                  
                };

                const axiosConfig = {
                  headers: {
                    "Content-Type": "application/json",
                  },
                };

                await Axios.put(
                  "https://nineleaps-fitness.herokuapp.com/add/gym",
                  data,
                  axiosConfig
                )
                  .then((response) => {
                    console.log("Successful!!!", response);
                    // if (response.data.id) {
                    //   swal(
                    //     "Success!!!",
                    //     "You are now a Registered User",
                    //     "success"
                    //   );
                    //  // window.location = "/VendorDashboard";
                    // } else {
                    //   //swal("Failed!!!", "You are Already a Registered User", "error")
                    // }
                  })
                  .catch((err) => {
                    console.error("Error", err.response.data);
                  });
              }}
            >
              {({ formProps, values, isSubmitting }) => (
                <Form method="PUT" className="fitnessCenterRegistration">
                  <Grid container item spacing={2}>
                    <Grid item xs={6}>
                      <Controls.Textfield
                        name="email"
                        label="Vendor Email-ID"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Controls.Textfield
                        name="fcName"
                        label="Fitness-Center Name"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Controls.Textfield
                        type="number"
                        name="fcContact"
                        label="Contact No."
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Controls.Textfield
                        type="number"
                        name="fcCapacity"
                        label="Capacity"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <label>Address</label>
                    </Grid>
                    <Grid item xs={4}>
                      <Controls.Textfield
                        name="fcAddress.buildingName"
                        label="Building-Name"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Controls.Textfield
                        name="fcAddress.areaName"
                        label="Area-Name"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Controls.Textfield name="fcAddress.city" label="City" />
                    </Grid>
                    <Grid item xs={3}>
                      <Controls.Textfield
                        type="number"
                        name="fcAddress.postalCode"
                        label="Postal-Code"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <label>Time-Slots</label>
                    </Grid>
                    <Grid item xs={3}>
                      <Controls.Textfield
                        name="fcSlot.morning"
                        label="Morning"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Controls.Textfield
                        name="fcSlot.afternoon"
                        label="Afternoon"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Controls.Textfield
                        name="fcSlot.evening"
                        label="Evening"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Controls.Textfield
                        name="fcSlot.weekly_off"
                        label="Weeklyoff-Day"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <label>Subscription-Planner</label>
                    </Grid>
                    <Grid item xs={2}>
                      <Controls.Textfield
                        type="number"
                        name="fcSubscription.monthly"
                        label="Monthly"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Controls.Textfield
                        type="number"
                        name="fcSubscription.quaterly"
                        label="Quarterly"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Controls.Textfield
                        type="number"
                        name="fcSubscription.halfYearly"
                        label="Half Yearly"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Controls.Textfield
                        type="number"
                        name="fcSubscription.yearly"
                        label="Yearly"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Controls.Textfield
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
                      <Controls.FormCheckbox
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
                    <Grid item xs={12}>
                      <Controls.FormButton>ADD</Controls.FormButton>
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
