import React from 'react'
import {Box, Typography} from '@material-ui/core';
import {useStyles} from './HeaderStyles';
import Navbar from './Navbar'; 
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';

export default function HeaderComponent() {

    const classes = useStyles();
   
    return (
        <div>
           <Box class={classes.HeaderWrapper}>
               <Navbar />
                <Box class={classes.Headercontainer}>
     
                    <Typography variant="h3" component="h4" className={classes.headerTitle}>
                        I am webdeveloper
                    </Typography>

                    <Typography variant="h3" component="h4" className={classes.headerDesc}>
                        I created Wbsites and Application,
                        <br/>
                        Based On Your Needs...
                    </Typography>

                    <Box className={classes.decorator}>
                       <Typography variant='span' className={classes.decoratortext} >
                        About Me 
                       </Typography> 

                       <Typography variant='span' className={classes.arrow} >
                        <ArrowDownwardRoundedIcon/> 
                       </Typography>

                    </Box>
                </Box>
           </Box>
        </div>
    )
}
