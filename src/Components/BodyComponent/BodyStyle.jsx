import {makeStyles} from '@material-ui/core';
import {Theme} from '../HeaderComponent/Theme';

export const useStyles = makeStyles((theme)=> ({
    section:{
        backgroundColor:Theme.colors.base2,
        padding:theme.spacing(10,0,6,0),
    },
    section1:{
        backgroundColor:Theme.colors.primary1,
        padding:theme.spacing(10,0,6,0),
        height:"800px",
    },
    sectionDark:{
        backgroundColor:Theme.colors.primary1,
        padding:theme.spacing(10,0,6,0),
    },
    //common
    divider:{
        width: "65px",
        height: "4px",
        backgroundColor: Theme.colors.primary,
    },

    responsiveimage:{
        width:"100%",
        height:"absolute",
    },

    shc:{
        padding:theme.spacing(1),
        color: Theme.colors.base1,
        fontWeight:"bolder",
    },
    heading:{
        color: Theme.colors.base1,
        fontWeight:"bolder",
        margin:theme.spacing(1,0)
    },
    headingDesc:{
        fontWeight:"bold",
        margin: theme.spacing(1,0),
        [theme.breakpoints.down("xs")]:{
            fontSize: "1.5rem",
        },
        color: Theme.colors.base1,
    },
    shc1:{
        padding:theme.spacing(1),
        color: Theme.colors.base2,
        fontWeight:"bolder",
    },
    heading1:{
        color: Theme.colors.base2,
        fontWeight:"bolder",
        margin:theme.spacing(1,0)
    },
    headingDesc1:{
        fontWeight:"bold",
        margin: theme.spacing(1,0),
        [theme.breakpoints.down("xs")]:{
            fontSize: "1.5rem",
        },
        color: Theme.colors.base2,
    },
    AvatarCount:{
        display:"flex",
        flexFlow:"row",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
    },
    avatar: {
        backgroundColor: Theme.colors.primary,
        color: Theme.colors.base2,
        width: "45px",
        height: "45px",
        position:"relative",
        borderRadius:"20%"
        
    },
    MediaText:{
        color: Theme.colors.base1,
        fontWeight:"bold",   
    },
    MediaText1:{
        color: Theme.colors.base2,
        fontWeight:"bolder",   
    },
    ImageContainer:{
        position:"relative",
        '&:hover $imgOverlay':{
            opacity:1,
        },
    },
    imgOverlay:{
        position:"absolute",
        width:"100%",
        height:"100%",
        top: 0,
        left:0,
        backgroundColor: Theme.colors.primary,
        color:Theme.colors.base2,
        display:"flex",
        flexFlow:"column wrap",
        justifyContent:"center",
        alignItems:"center",
        opacity:0,
        transition:"0.7s",
    },
    overlayText:{
        fontSize:"2 rem",
        marginBottom:"16px",
        [theme.breakpoints.down('xs')]:{
            fontSize:"1.2rem",
        }
    },
    iconmedia:{
        display:"flex",
        flexFlow:"row",
        margin:"5px",
        alignItems:"center",
        position:"relative",   
    },
    footerContainer: {
        padding: theme.spacing(2),
        backgroundColor: Theme.colors.base2,
        color: Theme.colors.base1,
        position: "relative",
        alignItems:"center",
        height:"absolute",

        fontWeight:"bold",
      },
      arrowTop: {
        position: "absolute",
        top: "-25px",
        right: "20px",
        backgroundColor: Theme.colors.primary,
      },
      skill:{
         Width:"100%",
         height:"relative", 
        justifyContent:"center",
        alignItems:"center",
        color:Theme.colors.base1,
        position: "auto",
        fontWeight:"bold",
      },
      IconAvatar:{
        display:"flex",
        flexFlow:"row",
        
        position:"relative",
    },

      iconbutton:{
        backgroundColor: Theme.colors.primary,
        color: Theme.colors.base2,
        width: "10px",
        height: "45px",
        position:"relative",
        borderRadius:"20%"
      },
      button:{
        backgroundColor: Theme.colors.primary1,
        margin:"55px 20px",
        color:Theme.colors.base2,
      },
}));