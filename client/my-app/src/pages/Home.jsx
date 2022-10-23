import { Typography, Box, Button, Grid, Select, MenuItem } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { render } from 'react-dom';
import Friend from '../components/Friend';
import Navbar from '../components/Navbar';
import Session from '../components/Session';
import { useState } from 'react';


function Home() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
        render(<Friend name={name} />, document.getElementById("friendStack").append);
    };
    return (
        <>
            <Box sx={{
                height:729,
                backgroundColor: '#E3B65D',
            }}>
                <Navbar></Navbar>
                <Typography variant="h1">WE EAT</Typography>
                <Typography variant="h4">find a place where all your friends will want to eat</Typography>
                <Button variant="contained">start</Button>
            </Box>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant = "h3">Find Suggestions</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Session />
                </Grid>
                <Grid item xs={3}>
                    <Stack spacing={3} id="friendStack">
                        <Select
                            labelId="chooseFriend"
                            id="demo-simple-select-standard"
                            value={name}
                            onChange={handleChange}
                            label="friend"
                            defaultValue=""
                        >
                            <MenuItem value="Monica Geller">Monica Geller</MenuItem> 
                            <MenuItem value="Rachel Green">Rachel Green</MenuItem> 
                            <MenuItem value="Chandler Bing">Chandler Bing</MenuItem> 
                        </Select>
                        <Friend name="John Smith" id="johnSmith"/>
                        <Friend name="Monica Lee" id="monicaLee"/>
                        <Friend />
                    </Stack>
                </Grid>
            </Grid>
        </>
        
    );
}

export default Home;