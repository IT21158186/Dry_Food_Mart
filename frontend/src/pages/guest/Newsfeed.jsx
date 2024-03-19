import React from 'react'
import MainFeaturedPost from '../../components/NewsFeed/MainFeaturedPost';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Newsfeed() {
  return (
    <div>
      <MainFeaturedPost />
      
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {'post.title'}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {'post.date'}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {'post.description'}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image={'https://bakingwithgranny.co.uk/wp-content/uploads/2022/03/Hungarian-Chocolate-3.jpg'}
                alt={'post.imageLabel'}
              />
            </Card>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {'post.title'}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {'post.date'}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image={'https://bakingwithgranny.co.uk/wp-content/uploads/2022/03/Hungarian-Chocolate-3.jpg'}
                alt={'post.imageLabel'}
              />
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </div>
  )
}
