import React from 'react';
import MediaCard from '../components/MediaCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Carasoul } from '../components/Carasoul';
import { Link } from '@mui/material';
import Divider from '@mui/material/Divider';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Home() {
    // Generate an array to render MediaCard components multiple times
    const mediaCards = Array.from({ length: 4 }, (_, index) => (
        <div key={index} style={{ margin: '10px' }}>
            <MediaCard />
        </div>
    ));

    return (
        <Container>
            <div style={{ marginTop: '20px' }}>
            <Carasoul/>
            </div>
      <Divider />
            <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' , textDecoration: 'underline', color: '#9ca3af'}}>
                About US
            </Typography>

            <Typography variant="h6" style={{ textAlign: 'center', color: '#9ca3af', marginBottom: '20px' }} gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sit, quam esse animi dolor odit doloremque commodi modi dolore quae suscipit tempore ipsam iusto impedit voluptatibus? Pariatur enim voluptates assumenda?
            </Typography>

            <Divider />
            <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: '#9ca3af' }}>
                 Top Selling Products
            </Typography>

            {/* Container for MediaCard components */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {/* Render MediaCard components */}
                {mediaCards}
            </div>

            {/* View More Button */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#9ca3af', color: 'white', border: 'none', borderRadius: '5px' }}>
                    View More
                </button>
            </div>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}
