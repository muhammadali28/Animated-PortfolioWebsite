import React from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./BodyStyle";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import {Link} from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Footer() {
  const classes = useStyles();
  const date = new Date();

  return (
    <Box className={classes.footerContainer} id="Footer">
      
      <IconButton
        color='inherit'
        className={classes.arrowTop}
        activeClass='active'
        to="Header"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1200}
        component={Link}>
        <ArrowUpwardIcon />
      </IconButton>
      <Typography variant='body1' align='center'>
        Developed and designed by
        Muhammad Ali , All Right Reserved &#169; {date.getFullYear()}
      </Typography>
 
    </Box>
  );
}