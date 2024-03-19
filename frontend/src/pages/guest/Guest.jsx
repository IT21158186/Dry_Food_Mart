import React from 'react';
import MediaCard from '../../components/MediaCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Carasoul } from '../../components/Carasoul';
import Divider from '@mui/material/Divider';

export default function Guest() {
    // Generate an array to render MediaCard components multiple times
    const mediaCards = Array.from({ length: 4 }, (_, index) => (
        <div key={index} style={{ margin: '10px' }}>
            <MediaCard />
        </div>
    ));

    return (
        <Container>
            <div className='mt-4'>
                <Carasoul />
            </div>
            <Divider />
            
            <Divider />
            <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: '#434747' }}>
                Top Selling Products
            </Typography>

            {/* Container for MediaCard components */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {/* Render MediaCard components */}
                {mediaCards}
            </div>

            {/* View More Button */}
            <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
                <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#9ca3af', color: 'white', border: 'none', borderRadius: '5px' }}>
                    View More
                </button>
            </div>
            <hr></hr>
            
            <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: '#434747' }}>
                About Us
            </Typography>
            <Typography variant="body1" gutterBottom style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: '#434747' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo itaque pariatur reprehenderit! Optio magnam odio, praesentium eveniet repellat beatae odit deleniti soluta quia aperiam! Debitis suscipit alias quas omnis.
            </Typography>
        </Container>
    );
}
