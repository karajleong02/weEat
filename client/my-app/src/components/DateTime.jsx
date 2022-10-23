import { TextField } from '@mui/material';
import React from 'react';


function DateTime() {
    return (
        <div>
            <TextField
                id="date"
                label="date"
                type="date"
                defaultValue="2022-10-21"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <label> from
                <TextField
                    id="time"
                    label="start time"
                    type="time"
                    defaultValue="17:30"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                    sx={{ width: 150 }}
                />
            </label>
            <label> to
                <TextField
                    id="time"
                    label="endtime"
                    type="time"
                    defaultValue="18:30"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                    sx={{ width: 150 }}
                />
            </label>
        </div>
        
    );
}

export default DateTime;