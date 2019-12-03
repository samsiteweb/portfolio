import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
   
    
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

export default function ImageAvatars(props) {
   const {src, alt, ...others} = props
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt={alt} src={src} className={classes.bigAvatar} {...others} />
    </Grid>
  );
}