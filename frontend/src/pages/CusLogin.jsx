import React from "react";
import { Typography, Button, Container, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
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
                    Login
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
                    <TextField
                        required
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Login
                    </Button>
                </Box>
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </Typography>
            </Box>
        </Container>
    );
}

export default Login;
