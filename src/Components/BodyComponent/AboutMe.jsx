import React from 'react';
import { useStyles } from './BodyStyle';
import { Box, Grid, Hidden, Container, Button } from '@material-ui/core';
import imageabout from '../../image/me.png';
import { RenderSectionHeading, Divider, CardMedia } from "../CommonComponents/common";
import WebIcon from "@material-ui/icons/Web";
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CreateIcon from '@material-ui/icons/Create';
import GetAppIcon from '@material-ui/icons/GetApp';
import ScrollAnimation from 'react-animate-on-scroll';
import FileSaver from 'file-saver';
import useWebAnimations, { pulse } from '@wellyshen/use-web-animations';
import pdf from "../../resources/Muhammad Ali CV.docx";

export default function AboutUs() {

    const classes = useStyles();

    const { ref, playState, getAnimation } = useWebAnimations({ ...pulse });
    console.log(process.env.PUBLIC_URL);

    const CardMediaData = [
        {
            title: "Web Development",
            description: "I have developed so many projects on web development",
            icon: <WebIcon />,
        },
        {
            title: "Wordpress Development",
            description: "I have expertise in making wordpress websites",
            icon: <ViewCompactIcon />,
        },
        {
            title: "Digital Expert",
            description: "I also have two months of sales expertise",
            icon: <AssessmentIcon />,
        },
        {
            title: "Frontend Developer",
            description: "I have created projects in Frontend Development and also learning Jamstack",
            icon: <CreateIcon />,
        },
    ]


    return (
        <Box className={classes.section} id="About">
            <ScrollAnimation animateIn="fadeIn">
                <Container>
                    <Grid container spacing={5} >
                        <Grid ref={ref} duration="infinity" item sm={5} >
                            <Box component={Hidden} xsDown>
                                <img src={imageabout} alt="about me" className={classes.responseimage} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            {RenderSectionHeading({
                                smallTxt: "ABOUT ME",
                                heading: "Hello I'm Muhammad Ali",
                                Description: "A self taught developer who loves to code something that will impact majority of the People!",
                                color: true,
                            })}
                            <br />
                            <Grid container>
                                {CardMediaData.map((item, i) => (
                                    <Grid item xs={12} sm={6} key={i} >
                                        {
                                            CardMedia({
                                                label: item.title, Desc: item.description,
                                                icon: item.icon,
                                                color: true,
                                            })}
                                    </Grid>
                                ))}
                            </Grid>

                            <Button
                                variant="contained"
                                className={classes.button}
                                endIcon={<GetAppIcon />}
                                href={pdf} target="_blank"
                            >
                                Download CV
                            </Button>

                        </Grid>
                    </Grid>
                </Container >
            </ScrollAnimation >
        </Box >
    );
}
