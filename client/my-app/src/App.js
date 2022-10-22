import './App.css';
import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';

class App extends React.Component {
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
    this.setState({email: event.target.email});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
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
            <Button variant="contained">create</Button>
          </Grid>
          
        </Grid>
        
      </form>
    );
  }
}

export default App;
