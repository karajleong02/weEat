import { Slider, ToggleButton, ToggleButtonGroup,  } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import DateTime from './DateTime';


function Session() {
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };
    return (
        <Stack spacing={5}>
            <DateTime />
            <label>Distance:
                <Slider
                    sx={{width:600}}
                    defaultValue={10}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={25}
                />
            </label>
            <label> Price: 
                <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                    >
                    <ToggleButton value="1" aria-label="1">
                        $
                    </ToggleButton>
                    <ToggleButton value="2" aria-label="2">
                       $$
                    </ToggleButton>
                    <ToggleButton value="3" aria-label="3">
                        $$$
                    </ToggleButton>
                    <ToggleButton value="4" aria-label="4">
                        $$$$
                    </ToggleButton>
                </ToggleButtonGroup>
            </label>
        </Stack>
    );
}

export default Session;