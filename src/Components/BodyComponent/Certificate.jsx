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

export default function Certificate() {
    const classes = useStyles();

    const certificateimage = [
        {
            url: image1,
            title: "Cerificate #1",
        },
        {
            url: image3,
            title: "Cerificate #2",
        },
        {
            url: image4,
            title: "Cerificate #3",
        },
        {
            url: image2,
            title: "Cerificate #4",
        },
        {
            url: image5,
            title: "Cerificate #5",
        },
        {
            url: image6,
            title: "Cerificate #6",
        }
    ]

    return (

        <Box className={classes.sectionDark} >
            <ScrollAnimation animateIn="fadeIn">
                <Container id="Portfolio">
                    <Grid conatainer style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                        <Grid item xs={12} sm={8}>
                            {RenderSectionHeading({
                                smallTxt: "Certificate", heading: "Some of the certification, I had done!", alignCenter: true,
                                color: false,
                            })}
                        </Grid>
                    </Grid>


                    <Grid container spacing={2}>
                        {certificateimage.map((item, i) => (
                            <Grid item xs={6} sm={6} md={4} key={i}>
                                <Box className={classes.ImageContainer}>

                                    <img
                                        src={item.url}
                                        alt={item.title}
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

