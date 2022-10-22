import React, { Component } from 'react';
import { TextField } from '@mui/material';

export default class CreateAccount extends Component() {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState(event.currentTarget.id = event.currentTarget.value);
    }

    render() {
        return (
            <form>
                <TextField
                    required
                    id="outlined-required"
                    label="email"
                    value={this.state.email}
                />
            </form>
        );
    }
}

