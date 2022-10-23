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
                        name="Dine"
                        distance="1.5"
                        price="$$"
                        cuisine="American"
                        url="https://www.mcdonalds.com/us/en-us.html"
                        imgURL="https://img.freepik.com/free-photo/hamburger-with-beef-meat-burger-fresh-vegetables-dark-surface_2829-5883.jpg?w=2000&t=st=1666490821~exp=1666491421~hmac=28b0d17814f2de389e886ac794e9109be9e602b13a1a19c65d087843a3403478"
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