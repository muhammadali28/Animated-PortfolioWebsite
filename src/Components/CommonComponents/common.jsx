import React from 'react';
import {Box, Typography, Avatar, Grid, Button} from '@material-ui/core';
import {useStyles} from '../HeaderComponent/HeaderStyles';
import {useStyles as bodyStyles} from "../BodyComponent/BodyStyle";
import Theme from '../HeaderComponent/Theme';

export const Decorator =({label, withicon,icon, styles,color })=>{
const classes=useStyles();

return(
<Box className={classes.decorator} style={styles} >
    <Typography component='span' className={classes.decoratortext} >
    {label} 
    </Typography> 

    { withicon ? ( 
    <Typography component='span' className={classes.arrow} >
    {icon} 
    </Typography> ) : null } 
   

</Box>

);
};

export const Divider = ({style}) => {
    const classes = bodyStyles();

    return (
    <div className={classes.divider} style={style} >
    </div>    
    );
};


export const RenderSectionHeading=({ 
smallTxt,
heading, 
Description, 
alignCenter,
color 
}) => {

    const classes= bodyStyles();
    return  <Box className={color ?classes.shc : classes.shc1} >
        {Decorator({
            label: smallTxt,
            withicon: false,
            styles: alignCenter ? {width: "100px", margin: "10px auto"} :
            {} ,

        })}
        
        <Typography 
        variant="h4" 
        className={color ? classes.heading : classes.heading1}  
        align= {alignCenter ? "center": "left"}
        color={color ? "white":"blue"}>
            {heading}
        </Typography>
        
        {Divider({
            style: alignCenter ? {margin:"16px auto"}: {margin:"16px 0px"}},)}

        <Typography 
        variant="body1" 
        component="h6" 
        className={color ? classes.headingDesc : classes.headingDesc1} 
        align= {alignCenter ? "center": "left"}>
            {Description}
        </Typography>

    </Box>

};

export const CardMedia = ({label,Desc,icon,key,color}) => {
    const classes = bodyStyles();

    return (
        <Grid container style={{marginTop: "20px"}}>
            <Grid item xs={3}
            className={classes.AvatarCount} >
               
                <Avatar className={classes.avatar}>{icon}</Avatar>
           
           </Grid >
            
            <Grid item xs={9}
            className={color ? classes.MediaText : classes.MediaText1}>
                <Typography variant="body1" component='h6' >
                {label}
                </Typography>
                <Typography variant="caption"  >
                    {Desc}
                </Typography>
            </Grid>
        </Grid>
    );
};

export const IconMedia = ({icon,href}) => {
    const classes = bodyStyles();

    return (
        <Grid container style={{marginTop: "20px"}}>
            <Grid item xs={3}
            className={classes.IconAvatar} >

                <Button className={classes.iconbutton} href={href} target="_blank" >
                    {icon}
                </Button>

           </Grid >
        </Grid>
    );
};

