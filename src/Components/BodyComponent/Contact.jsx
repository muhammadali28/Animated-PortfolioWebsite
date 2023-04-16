import React from 'react';
import { useStyles } from './BodyStyle';
import {Box, Grid, Hidden, Container} from '@material-ui/core';
import imageabout from '../../image/example-3.png';
import {RenderSectionHeading, CardMedia, IconMedia} from "../CommonComponents/common"; 
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import useWebAnimations,{pulse} from '@wellyshen/use-web-animations';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Contact() {

    const classes= useStyles();

    const { ref, playState ,getAnimation } = useWebAnimations({...pulse});

    const CardMediaData = [
        {
            title:"Name",
            description:"Muhammad Ali",
            icon:<PersonIcon/>,
        },
        {
            title:"Email",
            description:"asafder902@gmail.com",
            icon:<EmailIcon/>,
        },
        {
            title:"Number",
            description:"0311-2897912",
            icon:<PhoneIcon/>,
        },
        {
            title:"Social Media",
            description:"Connect with me! ",
            icon:<MoodOutlinedIcon/>,
        },
    ]

    const IconMediaData = [
        {
            icon:<FacebookIcon/>,
            link:"https://www.facebook.com/profile.php?id=100004876633842",
        },
        {
            icon:<GitHubIcon/>,
            link:"https://github.com/muhammadali28",
        },
        {
            icon:<LinkedInIcon/>,
            link:"https://www.linkedin.com/in/muhammad-ali-8391581a2",
        },
        {
            icon:<TwitterIcon/>,
            link:"https://twitter.com/Muhamma47173416",
        },
    ]


    return (
        <Box className={classes.section1}>
            <ScrollAnimation animateIn="fadeIn">
            <Container  id="Contact">
            <Grid>
            {RenderSectionHeading({
                        smallTxt:"CONTACTME ",
                        heading:"Seems To be Interesting",
                        Description:"Got my Portfolio seen , than feel free to contact me for your future projects",
                        alignCenter: true,
                    })}
            </Grid>
            <Grid container spacing={1} >
               
                <Grid item xs={12} sm={7}>
            
                    <br/>
                    <br/>
                    <Grid container>
                    {CardMediaData.map((item , i) => ( 
                        <Grid item xs={8} sm={8} key={i} >
                        {
                        CardMedia({ 
                            label: item.title, Desc: item.description,
                            icon: item.icon,
                            color:false,
                            })}
                        </Grid>
                         ))}
                    </Grid>

                    <Grid container className={classes.iconmedia}>
                    {IconMediaData.map((item , i) => ( 
                        <Grid item xs={2} sm={1} key={i}>
                        {
                        IconMedia({ 
                            icon: item.icon,
                            href:item.link,
                            })}
                        </Grid>
                         ))}
                    </Grid>
                </Grid>
                <Grid item sm={5} ref={ref}>
                    <Box component={Hidden} xsDown >
                    <img src={imageabout}  alt="contact" className={classes.responseimage} />
                    </Box>
                </Grid>

            </Grid>
        </Container>
        </ScrollAnimation>
        </Box>
    );
}
