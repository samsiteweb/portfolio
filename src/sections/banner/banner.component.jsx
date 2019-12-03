import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CustomBtn from '../../component/customBtn/customBtn.component';
import ImageAvatars from '../../component/avatar/avatar.component'
import './banner.styles.scss'
// import '../../../public/assets/imgs/sam.jpg'


const Banner = () => {
return (
    <div className="banner-background">
        <Grid  container direction='column' alignContent="center" style={{paddingBottom: '40px'}}>
            <Grid item style={{paddingTop: '40px'}}>
        <ImageAvatars classname='bigAvatar' src="asset/img/sam.jpg"  alt='my picture' />
        </Grid>
            <Grid item style={{ margin: '10px 350px'}} >
               <Typography variant='h1' align='center' 
               style={{paddingBottom: '30px', fontFamily: `Righteous, cursive`, color: '#6915cf' }} >
                   Lawal Samuel O. 
                </Typography>
               <Typography variant='h4' align='center' style={{fontFamily: `Gudea, sans-serif` }} >Welcome to my portfolio website</Typography>
            <Grid item align='center' style={{paddingTop: '30px'}}>
            <CustomBtn>Hire Me</CustomBtn>
            </Grid>
            </Grid>  
        </Grid>
    </div>
    )
}

export default Banner;