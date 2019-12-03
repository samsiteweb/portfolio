import React from 'react';
import ItemCard from '../item-card/item-card.component';
import SvgItem from '../svgitem/svgitem.component';
import { Typography, Grid} from '@material-ui/core'

const SkillDisplay = ({id, title, items, svgSize, titleVariant, labelVariant, itemBoxShadow, ...others}) => {
    return (
        
        <Grid container key={id} spacing={3} justify="left"  >

             <Grid item xs={12} >
                    <Typography variant={`${titleVariant}`} align="left" style={{ fontFamily: `Gudea, sans-serif` }}>{title}</Typography>
                </Grid>
                {/* xs={12} sm={6} md={3} */}
                    { items.map(({id, label, rating, svg, ...others}) => (
                            <Grid key={id} item style={{flexGrow: 1, }}  direction="row" >
                            <ItemCard   tag = {svg} label = {label} boxShadow={`${itemBoxShadow}`} ratings={rating} variant={`${labelVariant}`} > 
                                <SvgItem svg={svg} size={svgSize} /> 
                            </ItemCard>       
                 </Grid> )) }
        </Grid>
    
    )
}

export default SkillDisplay;