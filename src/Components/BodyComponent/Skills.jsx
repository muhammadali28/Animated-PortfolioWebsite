import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useStyles } from './BodyStyle';
import {Box, Grid, Container} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import {RenderSectionHeading} from "../CommonComponents/common";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width:"50%",
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);



const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    
  },
});

export default function Skills() {
  const classes1 = useStyle();
  const classes = useStyles();
  return (
 

<Box className={classes.section}>
            <ScrollAnimation animateIn="fadeIn">
            <Container  id="Skills">
              <Grid conatainer style={{display:"flex", justifyContent:"center",alignContent:"center"}}>
                    <Grid item xs={12} sm={8}>
                    {RenderSectionHeading({
                        smallTxt: "Skills", heading: "Some Skills I Got",
                        alignCenter: true,
                        color:true,
                    })}
                    </Grid>
              </Grid>
              
            <Grid container spacing={2} >
              
              <Grid className={classes.skill}>
                <Box className={classes1.root}>
                
                <h4>HTML</h4>
                <BorderLinearProgress variant="determinate" value={90} />
              
              <br/>      
                 <h4>CSS</h4>
                <BorderLinearProgress variant="determinate" value={60} />
              
              <br/>    
                 <h4>JavaScript</h4>
                <BorderLinearProgress variant="determinate" value={75} />
              
              <br/>      
                 <h4>React</h4>
                <BorderLinearProgress variant="determinate" value={60} />
              
              
              <br/>    
                <h4>C++</h4>
                
                <BorderLinearProgress variant="determinate" value={90} />
              
              </Box>
            </Grid>
        </Grid>
      </Container>
      </ScrollAnimation>
    </Box>

  );
}