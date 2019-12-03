import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram'
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import SendIcon from '@material-ui/icons/Send';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <FingerprintIcon />,
    2: <GroupWorkIcon />,
    3: <SendIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Biography', 'Who am I', 'Socials'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return  <div style={{marginLeft: '0px'}}>
          <Grid container spacing={2}>
              <Grid item xs ={2}> <b> Name: </b> </Grid> <Grid item xs ={10}> Lawal Samuel </Grid>
              <Grid item xs ={2}> <b> Date of birth: </b> </Grid> <Grid item xs ={10}> 11th December, 1994 </Grid>
              <Grid item xs ={2}> <b> Address: </b> </Grid> <Grid item xs ={10}> Agege, Lagos, Nigeria </Grid>
              <Grid item xs ={2}> <b> Email: </b> </Grid> <Grid item xs ={10}> samthedonz@gmail.com </Grid>
              <Grid item xs ={2}> <b> Phone: </b> </Grid> <Grid item xs ={10}> 09052085121 </Grid>

          </Grid>
      </div>;
    case 1:
      return <div>
                 <Grid container spacing={2}>
                 <Grid item xs ={12}> <b>Web Development</b></Grid>
              <Grid item xs ={12}> <b>Mobile Development</b></Grid>
              <Grid item xs ={12}> <b>Graphics Designer</b></Grid>
              <Grid item xs ={12}> <b> A Friend </b></Grid>

              

          </Grid>
      </div>
    case 2:
      return <div>
          <FacebookIcon style={{color: 'blue', fontSize: '50px', margin: '10'}} href="https://github.com/samsiteweb" /> 
          <InstagramIcon style={{color: 'red', fontSize: '50px', margin: '10'}} />
          <GitHubIcon style={{color: 'black', fontSize: '50px', margin: '10'}} />
          <LinkedInIcon  style={{color: 'grey', fontSize: '50px', margin: '10'}} />


      </div>
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      {/* <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}
      {/* <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length -1 ? (
        //   <div>
        //     <Typography className={classes.instructions}>
        //       All steps completed - you&apos;re finished
        //     </Typography>
        //     <Button onClick={handleReset} className={classes.button}  variant="contained"
        //         color="primary">
        //       Home
        //     </Button>
        //     <Button  onClick={handleBack} className={classes.button}>
        //         Back
        //       </Button>
        //   </div>
        <div style={{marginLeft: '150px'}} >
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
            
                  <Button disabled={activeStep === 2} onClick={handleNext} className={classes.button}>
                Next
              </Button>
              
            </div>
          </div>
        ) : (
          <div style={{marginLeft: '150px'}}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
                Next
              </Button>
              <div >
                   
              </div>
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
}