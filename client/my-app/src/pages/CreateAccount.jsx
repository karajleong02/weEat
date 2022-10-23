import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Axios from "axios";

class CreateAccount extends React.Component {
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

  

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("NNNNONANDWONDAIODNWAIONDFIAO");
    Axios.post('http://localhost:3001/api/insert', {
      username: this.state.username, 
      password: this.state.password,
      email: this.state.email
    });
  }

  render() {

    return (
      <>
        <Link to="/">
          <Button variant="text">back to login</Button>
        </Link>
        <form onSubmit={this.handleSubmit}>
          <Grid container rowSpacing={3} columnSpacing={1}>
            <Grid item xs={12}><Typography variant="h2" align='center'>create account</Typography></Grid>
            <Grid item xs={1}><Typography variant="body1" align='right'>email: </Typography></Grid>
            <Grid item xs={11} align='center'>
                <TextField
                  required
                  sx={{width:438}}
                  id="outlined-required"
                  onChange={this.handleChange}
                  value={this.state.email}
                />  
            </Grid>
            <Grid item xs={1}><Typography variant="body1" align='right'>username: </Typography></Grid>
            <Grid item xs={11}>
              <TextField
                required
                sx={{width:438}}
                id="outlined-required"
                name = "email"
                value={this.state.email}
                onChange={this.handleChange}
              />  
          </Grid>
          <Grid item xs={1}><Typography variant="body1" align='right'>username: </Typography></Grid>
          <Grid item xs={11}>
            <TextField
              required
              sx={{width:438}}
              id="outlined-required username"
              name = "username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={1}><Typography variant="body1" align='right'>password: </Typography></Grid>
          <Grid item xs={11}>
            <TextField
              required
              sx={{width:438}}
              id="outlined-required password"
              name = "password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} align='center'>
            <Link to='/profile'>
                <Button variant="contained" type="submit" onClick={this.handleSubmit}>create</Button>        
            </Link>
                id="outlined-required username"
                value={this.state.username}
              />
            </Grid>
            <Grid item xs={1}><Typography variant="body1" align='right'>password: </Typography></Grid>
            <Grid item xs={11}>
              <TextField
                required
                sx={{width:438}}
                id="outlined-required password"
                value={this.state.password}
              />
            </Grid>
            <Grid item xs={12} align='center'>
              <Link to='/profile'>
                  <Button variant="contained">create</Button>        
              </Link>
            </Grid>
          </Grid>
        </form>
      </>
      
    );
  }
}

export default CreateAccount;
