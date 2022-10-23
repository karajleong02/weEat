import React, { Component } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Link, Rating } from '@mui/material';

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            distance: this.props.distance,
            price: this.props.price,
            rating: this.props.rating,
            cuisine: this.props.cuisine,
            url: this.props.url,
            imgURL: this.props.imgURL
        };
    }
    render() {
        return (
            <Card sx={{ maxWidth: 342 }}>
                <CardMedia
                    component="img"
                    height="231"
                    src={this.state.imgURL}
                />
                <CardContent>
                    <Grid container align="left">
                        <Grid item xs={10}>
                            <Typography id="name" variant="h5">
                                {this.state.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography id="distance" variant="body1">
                                {this.state.distance} mi
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Rating value={this.state.rating} precision={0.1} readOnly/>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography id="price" variant="h6">
                                {this.state.price}
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography id="cuisine" variant="h6">
                                {this.state.cuisine}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography id="description" variant="body1">
                                <Link src={this.state.url}>{this.state.url}</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
   
}

export default Restaurant;