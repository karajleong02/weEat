import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import {Button} from '@mui/material';

function Login() {
    return (
        <>
            <Navbar></Navbar>
            <Link to='/createAccount'>
                <Button variant="text">
                    createaccount
                </Button>
            </Link>
        </>
        
    );
}

export default Login;