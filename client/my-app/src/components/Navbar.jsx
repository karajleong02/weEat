import { Typography, Button } from '@mui/material';
import React from 'react';
// import {Box, AppBar, Toolbar} from '@mui/material'
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <Grid container>
            <Grid item xs={8}>
                <Typography variant="h3">WE EAT</Typography>
            </Grid>
            <Grid item xs={1} align="center">
                <Link to='/home'>
                    <Button variant="text">
                        home
                    </Button>
                </Link>
                
            </Grid>
            <Grid item xs={1} align="center">
                <Link to='/profile'>
                    <Button variant="text">
                        profile
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={1} align="center">
                <Link to='/suggestions'>
                    <Button variant="text">
                        suggestions
                    </Button>
                </Link> 
            </Grid>
            <Grid item xs={1}>
                <Link to='/'>
                    <Button variant="contained">
                        logout
                    </Button>
                </Link> 
            </Grid>
            
        </Grid>
    )
}

export default Navbar;