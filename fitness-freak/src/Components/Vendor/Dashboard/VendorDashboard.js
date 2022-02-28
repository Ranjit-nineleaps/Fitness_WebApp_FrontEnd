import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Button from "../../Inputs/FieldButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import PaidIcon from "@mui/icons-material/Paid";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
  },
}));

function VendorDashboard() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>Vendor Dashboard</Typography>
      </Grid>
      <Grid item xs={5}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Grid
              container
              item
              xs={12}
              spacing={5}
              className="vendor-menu"
              direction="column"
            >
              <Button
                endIcon={<AddBoxIcon />}
                onClick={() => {
                  window.location = "/VendorAddCenter";
                }}
              >
                Register a New Fitness-Center
              </Button>
              <Button
                endIcon={<EditIcon />}
                onClick={() => {
                  window.location = "/VendorEditCenter";
                }}
              >
                Edit a Registered Fitness-Center
              </Button>
              <Button endIcon={<PaidIcon />}>Payment Details</Button>
            </Grid>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default VendorDashboard;
