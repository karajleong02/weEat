import React from 'react';
import { Box } from '@mui/system';
import { Typography, Button, Grid, } from '@mui/material';
import { ToggleButton, ToggleButtonGroup, IconButton } from '@mui/material';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Navbar from '../components/Navbar';

function Profile() {
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };
    return (
        <>
            <Navbar></Navbar>
            <Box sx={{
                height:729,
                backgroundColor: '#E3B65D',
            }}>
                <Typography variant="h2">Cuisines</Typography>
                <Typography variant="body1">tell us about your food preferences</Typography>
                <form>
                    <Grid container rowSpacing={5}>
                        <Grid item xs={8}>
                            <Typography variant="h6">American</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <ToggleButtonGroup
                                value={formats}
                                onChange={handleFormat}
                                exclusive
                                aria-label="text formatting"
                                >
                                <ToggleButton value="dislike" aria-label="dislike">
                                    <IconButton><ThumbDownAltIcon/></IconButton>
                                </ToggleButton>
                                <ToggleButton value="like" aria-label="like">
                                    <IconButton><ThumbUpIcon/></IconButton>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h6">Chinese</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <ToggleButtonGroup
                                value={formats}
                                onChange={handleFormat}
                                exclusive
                                aria-label="text formatting"
                                >
                                <ToggleButton value="dislike" aria-label="dislike">
                                    <IconButton><ThumbDownAltIcon/></IconButton>
                                </ToggleButton>
                                <ToggleButton value="like" aria-label="like">
                                    <IconButton><ThumbUpIcon/></IconButton>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h6">Italian</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <ToggleButtonGroup
                                value={formats}
                                onChange={handleFormat}
                                exclusive
                                aria-label="text formatting"
                                >
                                <ToggleButton value="dislike" aria-label="dislike">
                                    <IconButton><ThumbDownAltIcon/></IconButton>
                                </ToggleButton>
                                <ToggleButton value="like" aria-label="like">
                                    <IconButton><ThumbUpIcon/></IconButton>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h6">Mexican</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <ToggleButtonGroup
                                value={formats}
                                onChange={handleFormat}
                                exclusive
                                aria-label="text formatting"
                                >
                                <ToggleButton value="dislike" aria-label="dislike">
                                    <IconButton><ThumbDownAltIcon/></IconButton>
                                </ToggleButton>
                                <ToggleButton value="like" aria-label="like">
                                    <IconButton><ThumbUpIcon/></IconButton>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h6">Japanese</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <ToggleButtonGroup
                                value={formats}
                                onChange={handleFormat}
                                exclusive
                                aria-label="text formatting"
                                >
                                <ToggleButton value="dislike" aria-label="dislike">
                                    <IconButton><ThumbDownAltIcon/></IconButton>
                                </ToggleButton>
                                <ToggleButton value="like" aria-label="like">
                                    <IconButton><ThumbUpIcon/></IconButton>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h6">Korean</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <ToggleButtonGroup
                                value={formats}
                                onChange={handleFormat}
                                exclusive
                                aria-label="text formatting"
                                >
                                <ToggleButton value="dislike" aria-label="dislike">
                                    <IconButton><ThumbDownAltIcon/></IconButton>
                                </ToggleButton>
                                <ToggleButton value="like" aria-label="like">
                                    <IconButton><ThumbUpIcon/></IconButton>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                    <Button variant="contained">submit</Button>
                </form>
                
            </Box>
        </>
        
    );
}

export default Profile;