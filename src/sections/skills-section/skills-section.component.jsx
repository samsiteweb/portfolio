import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import './skills.styles.scss'
import {SKILL_DATA1, SKILL_DATA2, SKILL_DATA3 } from '../../assets/data/data';
import SkillDisplay from '../../component/skilldisplay/skilldisplay.component'

class  SkillsSection extends React.Component {
    constructor() {
        super();
       
        this.state = {
            skills:  SKILL_DATA1,
            skills2: SKILL_DATA2,
            skills3: SKILL_DATA3
        }
    }
    
    render() {
        const {skills, skills2, skills3} = this.state;
        return (
    <div className="content" flexWrap="nowrap" >
        <div style={{paddingBottom: '20px'}}>
        <Typography variant="h2"> My Skills </Typography>
        </div>
            <Grid container  >
                <Grid container item md="12">
            {
               skills.map(({id, title, items, ...others}) =>
                <SkillDisplay key={id} svgSize="200" items={items}  itemBoxShadow={3} labelVariant="h6" titleVariant="h4" {...others} />
               )
            }
                </Grid>
                
            </Grid>

          <Grid container style={{marginTop:50}}  >
       
                <Grid container item md={6} style={{paddingRight: 25}} >
                {
                    skills2.map(({id, title, items, ...others}) =>
                        <SkillDisplay 
                        key={id} 
                        svgSize="50" 
                        labelVariant="h6" 
                        itemBoxShadow={3} 
                        titleVariant="h5" 
                        items={items} 
                        title={title} {...others} />
                    )
                }

                </Grid>
        
                <Grid container item md={6} style={{paddingLeft: 25,}}>
                {
                    skills3.map(({id, title, items, ...others}) =>
                    <SkillDisplay 
                                    key={id} 
                                    svgSize="50" 
                                    labelVariant="h6" 
                                    itemBoxShadow={3} 
                                    titleVariant="h5" 
                                    items={items} 
                                    title={title} {...others} />)
                }
                </Grid>
            </Grid>
       

        </div>
    )
   }
}

export default SkillsSection;