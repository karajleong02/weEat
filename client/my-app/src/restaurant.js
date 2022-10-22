import React, { Component, useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

export default class restaurant extends Component() {
    constructor(props) {
        super(props);
        this.state = { name: '', rating: {}, distance: {}, price: {}, cuisine: '', description: '' };
    }

    // const[name, setName] = useState([]);

    render() {
        return (
            <Card sx={{maxWidth: 342}}>
                <CardMedia
                    component="img"
                    height="231"
                    image={this.props.img}
                />
                <CardContent>
                    <Typography></Typography>
                </CardContent>
            </Card>
        );
    }
}
