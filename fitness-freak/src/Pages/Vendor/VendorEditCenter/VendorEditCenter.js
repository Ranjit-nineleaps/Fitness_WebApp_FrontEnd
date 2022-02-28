import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '../../../Components/Inputs/EditButton';
import GymImg from '../../../Assets/images/GymdetailsImg.png';
import EditIcon from '@mui/icons-material/Edit';
import NavBar from '../../../Components/Navbar/Navbar';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function VendorEditGym() {
  return (
  <>
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
        <Grid item xs={12}>
            <Grid container spacing={2}>
            <Grid item>
            <Button sx={{ width: 128, height: 128 }}>
                <Img alt="gym1 Img" src={GymImg} />
            </Button>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                    <Typography  variant="subtitle1" component="div">
                        Gym1 Name
                    </Typography>
                    <Typography variant="body2" >
                        Gym1 Address
                    </Typography>
                    <Typography variant="body2" >
                        Gym1 Time Slot
                    </Typography>
                    <Typography variant="body2" >
                        Gym1 Facilities
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                <Button endIcon={<EditIcon />}>
                        Edit
                </Button>
                </Grid>          
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item>
            <Button sx={{ width: 128, height: 128 }}>
                <Img alt="gym1 Img" src={GymImg} />
            </Button>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                    <Typography  variant="subtitle1" component="div">
                        Gym2 Name
                    </Typography>
                    <Typography variant="body2" >
                        Gym2 Address
                    </Typography>
                    <Typography variant="body2" >
                        Gym2 Time Slot
                    </Typography>
                    <Typography variant="body2" >
                        Gym2 Facilities
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                <Button endIcon={<EditIcon />}>
                        Edit
                </Button>
                </Grid>          
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item>
            <Button sx={{ width: 128, height: 128 }}>
                <Img alt="gym1 Img" src={GymImg} />
            </Button>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                    <Typography  variant="subtitle1" component="div">
                        Gym3 Name
                    </Typography>
                    <Typography variant="body2" >
                        Gym3 Address
                    </Typography>
                    <Typography variant="body2" >
                        Gym3 Time Slot
                    </Typography>
                    <Typography variant="body2" >
                        Gym3 Facilities
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                <Button endIcon={<EditIcon />}>
                        Edit
                </Button>
                </Grid>          
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item>
            <Button sx={{ width: 128, height: 128 }}>
                <Img alt="gym1 Img" src={GymImg} />
            </Button>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                    <Typography  variant="subtitle1" component="div">
                        Gym4 Name
                    </Typography>
                    <Typography variant="body2" >
                        Gym4 Address
                    </Typography>
                    <Typography variant="body2" >
                        Gym4 Time Slot
                    </Typography>
                    <Typography variant="body2" >
                        Gym4 Facilities
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                <Button endIcon={<EditIcon />}>
                        Edit
                </Button>
                </Grid>          
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item>
            <Button sx={{ width: 128, height: 128 }}>
                <Img alt="gym1 Img" src={GymImg} />
            </Button>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                    <Typography  variant="subtitle1" component="div">
                        Gym5 Name
                    </Typography>
                    <Typography variant="body2" >
                        Gym5 Address
                    </Typography>
                    <Typography variant="body2" >
                        Gym5 Time Slot
                    </Typography>
                    <Typography variant="body2" >
                        Gym5 Facilities
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                <Button endIcon={<EditIcon />}>
                        Edit
                </Button>
                </Grid>          
            </Grid>
        </Grid>
      </Grid>
    </Paper>
    </>    
  );
};

export default VendorEditGym;