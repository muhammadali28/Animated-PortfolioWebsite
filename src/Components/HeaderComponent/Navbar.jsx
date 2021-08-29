import {React,useState} from 'react';
import {AppBar,Toolbar,Typography,Button, Box, Hidden,IconButton} from '@material-ui/core';
import {useStyles} from './HeaderStyles';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import {Link} from 'react-scroll';

export default function Navbar({navlinks,handleDrawerToogler}) {

    const classes= useStyles();
    
    const[nav, setnav] = useState(false);
    const changeBackground=()=>{
      if(window.scrollY>=50){
        setnav(true);
      }
      else{
        setnav(false);
      }

    }
    window.addEventListener("scroll",changeBackground);

    return (
        <AppBar position="fixed"
        className={nav ? classes.Navbaractive : classes.Navbar}>
        <Toolbar className={classes.Toolbar}>
          <Typography variant="h4" component="h6">
            {"< Dev Ali />"}
          </Typography>

          <Box component={Hidden} xsDown>
            <Box>  
            {navlinks.map((item,i)=>(
                <Button key={i} className={classes.navlinks}
                activeClass='active'
                to={`${item.Id}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                component={Link}
                color='inherit'
                
                >{item.label}</Button>
            ))}
            </Box>
          </Box>
          <Box component={Hidden} smUp>
              <IconButton color="inherit"
              onClick={handleDrawerToogler}>
                <MenuOpenRoundedIcon/>
              </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    )
}
