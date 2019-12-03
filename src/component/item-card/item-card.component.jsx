import React from 'react';
import { makeStyles, Grid, Box, Typography } from '@material-ui/core';
import { ReactComponent as EmptyBox  } from './check-box-empty.svg';


const useStyles = makeStyles(theme => ({
   
    box: {
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        padding: theme.spacing(1),
        textAlign: 'center',

    },

}));

export const ItemCard = ({children, label, ratings, backgroundColor, boxShadow, variant}) => {
    
    const classes = useStyles();
    
    return (
        <Box className={classes.box} boxShadow={(boxShadow ? boxShadow : 3 )} style={ (backgroundColor ? {backgroundColor: `${backgroundColor}`} : {backgroundColor: "#f8f8f8"} ) } >   
        {( 
            children ?  children : <EmptyBox  style ={{height: 100, width: 100}} />)
        }
          
            <Grid>
                { (
                    label ? <Grid>
                    <Typography variant={( variant ?  `${variant}` : `h4`)}>{label}</Typography>
                </Grid>
                :
                null
                )}
                
                {(
                ratings ?
                <Grid>
                    <b>Rating</b>: {ratings}
                </Grid> : null )
                }
            </Grid>
        </Box>
    )
};

export default ItemCard;