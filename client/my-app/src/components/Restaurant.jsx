import React, { Component } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

class Restaurant extends Component {
    constructor(props) {
        super(props);
    }
    props.name
    render() {
        return (
            <Card sx={{ maxWidth: 342 }}>
                <CardMedia
                    component="img"
                    height="231"
                    image="setimg"
                />
                <CardContent>
                    <Grid container align="left">
                        <Grid item xs={10}>
                            <Typography id="name" variant="h5">
                                {props.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography id="distance" variant="body1">
                                1.5 mi
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <h3>STARS</h3>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography id="price" variant="h6">
                                $$
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography id="cuisine" variant="h6">
                                Korean
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography id="description" variant="body1">
                                description
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
   
}

export default Restaurant;