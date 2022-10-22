import React from 'react';
import Navbar from '../components/Navbar';
import Restaurant from '../components/Restaurant';
import { Grid } from '@mui/material';

function Suggestions() {
    return (
        <>
            <Navbar></Navbar>
            <Grid container spacing={8} align="center">
                <Grid item xs={3}>
                    <Restaurant
                        name=""
                        
                    ></Restaurant>
                </Grid>
                <Grid item xs={3}>
                    <Restaurant></Restaurant>
                </Grid>
                <Grid item xs={3}>
                    <Restaurant></Restaurant>
                </Grid>
                <Grid item xs={3}>
                    <Restaurant></Restaurant>
                </Grid>
                <Grid item xs={3}>
                    <Restaurant></Restaurant>
                </Grid>
                <Grid item xs={3}>
                    <Restaurant></Restaurant>
                </Grid>
                <Grid item xs={3}>
                    <Restaurant></Restaurant>
                </Grid>
                <Grid item xs={3}>
                    <Restaurant></Restaurant>
                </Grid>
            </Grid>
            
        </>
        
    );
}

export default Suggestions;