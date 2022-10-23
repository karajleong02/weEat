import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography, TextField } from '@mui/material';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    handleSubmit(event) {

    }

    render() {
        return (
        <>
            <Grid container>
                <Grid item xs={3}>
                    <Typography variant="h1">WE</Typography>
                    <Typography variant="h1">EAT</Typography>   
                </Grid>
                    <Grid item xs={9} align="center">
                    <Typography variant="h2">log in</Typography>
                    <form onSubmit={this.handleSubmit}>
                        <Grid>
                            <Grid item xs={12} rowSpacing={3}>
                                <TextField
                                    required
                                    name="username"
                                    sx={{width:438}}
                                    id="outlined-required"
                                    onChange={this.handleChange}
                                    value={this.state.username}
                                    label="username"
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                name="password"
                                sx={{width:438}}
                                id="outlined-required"
                                onChange={this.handleChange}
                                value={this.state.password}
                                label="password"
                            />
                            </Grid>
                            <Grid item xs={12}>
                                <Link to='/home'>
                                    <Button variant="contained">login</Button>        
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Link to='/createAccount'>
                                    <Button variant="text">
                                        Create Account
                                    </Button>
                                </Link> 
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            

        </>
        
    );
    }
    
}

export default Login;