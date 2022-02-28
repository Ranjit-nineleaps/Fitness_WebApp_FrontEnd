import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Button from "../../../Components/Controls/FieldButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import PaidIcon from "@mui/icons-material/Paid";
import NavBar from "../../../Components/Navbar";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
    marginRight: theme.spacing(2),
  },
}));

function VendorDashboard() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Grid container spacing={2}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Grid
              container
              item
              spacing={2}
              className="vendor-menu"
              direction="column"
            >
              <Grid item xs={12}>
                <Typography>Vendor Dashboard</Typography>
              </Grid>
              <Grid item xs={6}>
                <Button
                  endIcon={<AddBoxIcon />}
                  onClick={() => {
                    window.location = "/VendorAddCenter";
                  }}
                >
                  Register a New Fitness-Center
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  endIcon={<EditIcon />}
                  onClick={() => {
                    window.location = "/VendorEditCenter";
                  }}
                >
                  Edit a Registered Fitness-Center
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  endIcon={<PaidIcon />}
                  onClick={() => {
                    window.location = "/VendorPayment";
                  }}
                >
                  Payment Section
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Grid>
    </>
  );
}

export default VendorDashboard;
