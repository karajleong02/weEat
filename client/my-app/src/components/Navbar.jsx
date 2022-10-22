import { Typography, Link } from '@mui/material';
import React from 'react';
import {Box, AppBar, Toolbar} from '@mui/material'


function Navbar() {
    return (
        <Box sx={{ flexGrow:1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow:1}}>
                        WE EAT
                    </Typography>
                    <Link
                        component="button"
                        color='inherit'
                        variant="body1"
                        href='./pages/Profile.jsx'
                    >
                       profile
                    </Link>
                    
                    <Link
                        component="button"
                        background-color='#463415'
                        color='inherit'
                        variant="body1"
                        href='./pages/login.jsx'
                    >
                       logout
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;