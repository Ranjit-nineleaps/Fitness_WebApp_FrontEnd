import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Button from '../../FormsUI/FieldButton';
import { Stack } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import PaidIcon from '@mui/icons-material/Paid';


const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
  },
}));


function VendorDashboard(){
  
  const classes = useStyles();

  return (
    <Grid container spacing ={2}>
        <Grid item xs={12}>
            <Typography>
                Vendor Dashboard
            </Typography>
        </Grid>
        <Grid item xs={5}>
            <Container maxWidth="md">
                <div className={classes.formWrapper}>
                    <Stack className='vendor-menu' direction="column" spacing={5}>
                        <Button endIcon={<AddBoxIcon />}>Register a New Gym</Button>
                        <Button endIcon={<EditIcon />}>Edit a Registered Gym</Button>
                        <Button endIcon={<PaidIcon />}>Payment Details</Button>
                    </Stack>
                </div>
            </Container>
        </Grid>
    </Grid>
  );
};

export default VendorDashboard ;
