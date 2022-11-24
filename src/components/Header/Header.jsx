import React from 'react';
import { Autocomplete } from '@mreact-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar className={classes.Toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                <Typography variant="h5" className={classes.title}>
                    Explore new places
                </Typography>
                <Autocomplete>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <searchIcon /> 

                            <InputBase placeholder="Search..." clases={{classes.InputRoot, input: classes.inputInput}} />

                        </div>


                    </div>

                </Autocomplete>



                </Box>
            </Toolbar>

        </AppBar>
        
    );
}

export default Header;