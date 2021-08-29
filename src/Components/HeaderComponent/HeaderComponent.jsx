import {React,useState} from 'react';
import {Box, Typography, Drawer} from '@material-ui/core';
import {useStyles} from './HeaderStyles';
import Navbar from './Navbar'; 
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import {Decorator} from "../CommonComponents/common";
import DrawerComponent from './DrawerComponent';
import Typed from 'react-typed';
import ScrollAnimation from 'react-animate-on-scroll';

export default function HeaderComponent() {

    const classes = useStyles();

    const [initialState,setinitialState]=useState(false);

    const handleDrawerToogler=()=>{
        setinitialState(!initialState);
    };

    const navlinks=[
        { label :"About", Id:"About"},
        { label :"Portfolio", Id:"Portfolio"},
        { label :"Skills", Id:"Skills"},
        { label :"Contact", Id:"Contact"},        
    ];


    return (
        <div>
           <Box className={classes.HeaderWrapper} id="Header">
               <ScrollAnimation animateIn="fadeIn">
               <Navbar 
               navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} 
               />

               <Drawer 
               navlinks={navlinks} handleDrawerToogler={handleDrawerToogler}
               /> 
               <DrawerComponent
               initialState={initialState}
               navlinks={navlinks} handleDrawerToogler={handleDrawerToogler}
               />
               
                <Box className={classes.Headercontainer}>
     
                    <Typography variant="h3" component="h4" className={classes.headerTitle}>
                        I am <span style={{paddingRight: "5px" }}></span>
                        <Typed
                        strings={[
                            "Web Developer,",
                            "Wordpress Developer",
                            "Digital Expert",
                        ]}
                        typeSpeed={30}
                        backSpeed={50}
                        loop
                        />
                    </Typography>

                    <Typography variant="h3" component="h4" className={classes.headerDesc}>
                        I created Wbsites and Application,
                        <br/>
                        Based On Your Needs...
                    </Typography>

                    {Decorator({
                        label: "About Me", withicon: true, icon:<ArrowDownwardRoundedIcon />,
                    })} 


                </Box>
                </ScrollAnimation>
           </Box>
        </div>
    )
}
