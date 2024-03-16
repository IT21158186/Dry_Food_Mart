import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Landing() {
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
                    Welcome to Our Website
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Discover amazing features and content!
                </Typography>
                {/* Use Link to navigate to the login page */}
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}

export default Landing;
