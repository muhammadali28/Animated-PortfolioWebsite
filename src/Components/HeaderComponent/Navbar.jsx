import React from 'react'
import {AppBar,Toolbar,Typography,Button, Box, Hidden,IconButton} from '@material-ui/core';
import {useStyles} from './HeaderStyles';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';


export default function Navbar() {

    const classes= useStyles();

    const navlinks=[
        { label :"About", Id:"About"},
        { label :"Portfolio", Id:"Portfolio"},
        { label :"Skills", Id:"Skills"},
        { label :"Contact", Id:"Contact"},        
    ];


    return (
        <AppBar position="fixed"
        className={classes.Navbar}>
        <Toolbar className={classes.Toolbar}>
          <Typography variant="h4" component="h6">
            {"< Dev Ali />"}
          </Typography>

          <Box component={Hidden} xsDown>
            <Box>  
            {navlinks.map((item,i)=>(
                <Button className={classes.navlinks}>{item.label}</Button>
            ))}
            </Box>
          </Box>
          <Box component={Hidden} smUp>
              <IconButton color="inherit">
                <MenuOpenRoundedIcon/>
              </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    )
}
