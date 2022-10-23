import { Card, CardHeader, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { useState } from 'react';

function Friend() {
    const [name, setName] = useState();

    const handleEvent = (event) => {
        setName("HELLO");
    }
    return (
        <Card>
            <CardHeader
                title={name}
                action={
                    <IconButton onClick={handleEvent}>
                        <DeleteIcon />
                    </IconButton>
                }
            />
        </Card>
    );
}

export default Friend;