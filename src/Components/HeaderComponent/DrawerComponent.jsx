import React from 'react';
import {useStyles} from './HeaderStyles';
import { Box ,List,Drawer,ListItem, ListItemText} from '@material-ui/core';

export default function DrawerComponent({handleDrawerToogler,initialState,navlinks}) {
    const classes= useStyles();

    return (
        <Drawer
            anchor="left" 
            open={initialState} 
            onClose={handleDrawerToogler}
            className={classes.drawer} >
                <Box className={classes.drawerContainer}>
                   <List style={{paddingTop:"30px"}}> 
                       {navlinks.map((item,i)=>(
                        <ListItem key={i} className={classes.list}>
                           <ListItemText>
                               {item.label}
                           </ListItemText>     
                        </ListItem>
                       ))}
                   </List>
                </Box>
        </Drawer>
    )
}

