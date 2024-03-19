import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ExpandMore, Favorite, Share } from '@material-ui/icons';
import { IconButton } from '@mui/material';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 100 }}
        image="https://images.unsplash.com/photo-1559622214-f8a9850965bb?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Typography>
      </CardContent>
    </Card>
  );
}