import React from 'react';
import {makeStyles} from '@material-ui/core';
import image1 from "../../image/Front.jpg";
import {Theme} from './Theme';

export const useStyles = makeStyles((theme)=>({
    HeaderWrapper:{
        width: '100%' ,
        minHeight: '110vh',
        height: 'auto',
        backgroundImage:`url(${image1})` ,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",    
    },
    Headercontainer:{
        width: '85%' ,
        minHeight: '110vh',
        height: '100%',
        display:"flex",
        flexFlow:"column wrap",
        padding: "20px",
        justifyContent: "center",
        color:Theme.colors.base2,
        fontFamily:"roboto",
    },
    headerTitle:{
        fontSize: "3rem",
        fontWeight:"bolder",
        margin: theme.spacing(1,0),
        [theme.breakpoints.down("xs")]:{
            fontSize: "2rem",
        },
    },
    heading:{
        fontWeight:"bolder",
    },
    headerDesc:{
        fontSize: "2rem",
        fontWeight:"bold",
        margin: theme.spacing(1,0),
        [theme.breakpoints.down("xs")]:{
            fontSize: "1.5rem",
        },

    },
    Navbar:{
        backgroundColor: "transparent",
        color: Theme.colors.base2,
        position:"fixed",
    },
    Navbaractive:{
        backgroundColor: Theme.colors.base1,
        color: Theme.colors.base2,
        position:"fixed",
    },
    Toolbar:{
        display:"flex",
        flexFlow:"flex wrap",
        justifyContent: "space-between",
    },
    navlinks:{
        color: Theme.colors.base2,
    },
    decorator:{
        display: "flex",
        fontWeight: "bolder",
        fontFamily: "roboto" ,
        position: "relative",
        '&:before':{
            margin: theme.spacing(2,0),
            width:"45px",
            height:"45px",
            backgroundColor:Theme.colors.primary,
            content:'""',
            borderRadius: "50%",
        },

    },
    decoratortext:{
        margin: theme.spacing(2,0),
        lineHeight: "45px",
        position:"absolute",
        left:"25px",
    },
    arrow:{
        margin: theme.spacing(1.5,0),
        position:"absolute",
        lineHeight:"50px",
        left:"95px",
        animationName:"upDown",
        animationDuration:"0.7s",
        animationIterationCount:"infinite",
    },

    "@global": {
        "@keyframes upDown":{
          "0%":{  
            transform:"scale(0)",
            paddingTop:"0px",
          },
          "100%":{
            transform:"scale(1)",
            paddingTop:"10px", 
          },
        },
    },
    drawer:{
        width:"250px",
        height:"100vh",
    },
    drawerContainer:{    
        width:"250px",
        height:"100vh",
        backgroundColor:Theme.colors.primary,
    },
    list:{
        color:Theme.colors.base2,
    },
}));