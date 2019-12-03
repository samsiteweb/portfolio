import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import pink from '@material-ui/core/colors/pink';


import './header.styles.scss'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Pacifico'
    },
    palette: {
        primary: pink,
      },
  }));


const Header = () => {
const classes = useStyles();
const {menuButton, title, root} = classes;

  return (  
    <div className={root}>
    <AppBar position="static" >
      <Toolbar >
        <IconButton edge="start" className={menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={title}>
          Portfolio
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
  )
}

export default Header;