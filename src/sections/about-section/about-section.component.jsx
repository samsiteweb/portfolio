import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomizedSteppers from '../../component/stepper/stepper.component'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AboutSection() {
    const classes = useStyles();
  
    return (
    <div className="content">
        <div style={{paddingBottom: '20px'}}>
        <Typography variant="h2"> About Me </Typography>
        </div>

      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs='4'>
              <img src="asset/img/new_image.jpg" height="500" width="500" />
          </Grid>
          <Grid item xs='8'>
           <div>
               <CustomizedSteppers />
           </div>
          </Grid>
         
        </Grid>
        </div>
      </div>
    )
}