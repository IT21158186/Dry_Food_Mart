import React from 'react';
import MediaCard from '../../components/MediaCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Items() {

  const mediaCards = Array.from({ length: 4 }, (_, index) => (
    <div key={index} style={{ margin: '10px' }}>
      <MediaCard />
    </div>
  ));

  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: '#9ca3af' }}>
        Latest Products
      </Typography>

      {/* Container for MediaCard components */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Render MediaCard components */}
        {mediaCards}
      </div>

      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: '#9ca3af' }}>
        Snacks
      </Typography>

      {/* Container for MediaCard components */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Render MediaCard components */}
        {mediaCards}
      </div>
      
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: '#9ca3af' }}>
        Bakery
      </Typography>

      {/* Container for MediaCard components */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Render MediaCard components */}
        {mediaCards}
      </div>
      
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: '#9ca3af' }}>
        Sweets
      </Typography>

      {/* Container for MediaCard components */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Render MediaCard components */}
        {mediaCards}
      </div>
    </div>
  )
}
