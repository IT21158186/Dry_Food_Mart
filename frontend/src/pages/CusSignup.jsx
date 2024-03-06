import React from "react";
import { Typography, Button, Container, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Signup() {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Typography variant="h1" gutterBottom>
                    Sign Up
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '300px' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField required id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField required id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField required id="outlined-basic" label="Contact Number" variant="outlined" />
                    <TextField required id="outlined-basic" label="Address" variant="outlined" />
                    <TextField required id="outlined-basic" label="Email" variant="outlined" />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="new-password"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="new-password"
                        variant="outlined"
                    />
                    <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Sign Up
                    </Button>
                </Box>
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
            </Box>
        </Container>
    );
}

export default Signup;
