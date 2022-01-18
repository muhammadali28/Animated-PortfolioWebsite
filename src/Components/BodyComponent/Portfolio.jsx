import React from 'react'
import { useStyles } from './BodyStyle';
import { Box, Grid, Container, Typography, Button } from '@material-ui/core';
import { RenderSectionHeading } from '../CommonComponents/common';
import ScrollAnimation from 'react-animate-on-scroll';
import image1 from '../../image/bolt2.png';
import image2 from '../../image/covid191.png';
import image3 from '../../image/fastlead1.png';
import image4 from '../../image/fastduct1.png';
import image5 from '../../image/portfolio1.png';
import image6 from '../../image/shoestore1.png';
import image7 from '../../image/onlinejob.jpeg';
import image8 from '../../image/adnanphoto.jpeg';


export default function Portfolio() {
    const classes = useStyles();

    const portfolioimage = [
        {
            url: image1,
            title: "Wordpress Project #1",
            link1: "https://boltshoes.pk/",
            link2: "",
        },
        {
            url: image3,
            title: "Wordpress Project #2",
            link1: "https://fastleadsolution.com/",
            link2: "",
        },
        {
            url: image4,
            title: "Wordpress Project #3",
            link1: "https://fastductcleaning.com/",
            link2: "",
        },
        {
            url: image2,
            title: "React Website #1",
            link1: "http://bootcamp2020-covid19trackerapp.surge.sh/",
            link2: "",
        },
        {
            url: image5,
            title: "React Website #2",
            link1: "https://MuhammadAliportfolio.surge.sh/",
            link2: "",
        },
        {
            url: image6,
            title: "React Website#3",
            link1: "https://bootcamp2020-shoestore.surge.sh/",
            link2: "",
        },
        {
            url: image7,
            title: "Full Stack Online Job Portal",
            link1: "",
            link2: "",
        },
        {
            url: image8,
            title: "Wordpress Website#4",
            link1: "https://mohammadadnanphotography.com/",
            link2: "",
        },
    ]

    return (

        <Box className={classes.sectionDark} >
            <ScrollAnimation animateIn="fadeIn">
                <Container id="Portfolio">
                    <Grid conatainer style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                        <Grid item xs={12} sm={8}>
                            {RenderSectionHeading({
                                smallTxt: "Portfolio", heading: "Let's See My Work", alignCenter: true,
                                color: false,
                            })}
                        </Grid>
                    </Grid>


                    <Grid container spacing={2}>
                        {portfolioimage.map((item, i) => (
                            <Grid item xs={6} sm={6} md={4} key={i}>
                                <Box className={classes.ImageContainer}>

                                    <img
                                        src={item.url}
                                        alt={item.tile}
                                        href={item.link1}
                                        className={classes.responsiveimage}
                                    />

                                    <Box className={classes.imgOverlay}>
                                        <Typography className={classes.overlayText}>
                                            {item.title}
                                        </Typography>
                                        <Button variant='contained' href={item.link1} target="_blank" className={classes.overlayBtn}>
                                            Visit
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>

                        ))}

                    </Grid>
                </Container>
            </ScrollAnimation>
        </Box>

    );
}

