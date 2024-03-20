import React from 'react'
import MainFeaturedPost from '../../components/NewsFeed/MainFeaturedPost';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IconButton } from '@mui/material';
import { Favorite } from '@material-ui/icons';
import { useAuth } from '../common/AuthContext';

export default function Newsfeed() {
  const { userRole } = useAuth();

  return (
    <div>
      <MainFeaturedPost />

      {userRole === 'customer' && (
        <div>
          <Typography variant="h4" className='text-center'>Favorite</Typography>
          <Grid container direction="row" spacing={2} marginTop={1}>
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
                    {userRole === 'customer' && (
                      <div disableSpacing className='text-left'>
                        <IconButton aria-label="add to favorites">
                          <Favorite color='error'/>
                        </IconButton>
                      </div>
                    )}
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{ height: 205, width: 180, display: { xs: 'none', sm: 'block' } }}
                    image={'https://bakingwithgranny.co.uk/wp-content/uploads/2022/03/Hungarian-Chocolate-3.jpg'}
                    alt={'post.imageLabel'}
                  />
                </Card>
              </CardActionArea>
            </Grid>
          </Grid>
        </div>
      )}

      <div className='mt-7'>
        <Typography variant='h4' className='text-center'> Latest </Typography>
        <Grid container direction="row" spacing={2} marginTop={1}>
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
                  {userRole === 'customer' && (
                    <div disableSpacing className='text-left'>
                      <IconButton aria-label="add to favorites">
                        <Favorite />
                      </IconButton>
                    </div>
                  )}
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ height: 205, width: 180, display: { xs: 'none', sm: 'block' } }}
                  image={'https://bakingwithgranny.co.uk/wp-content/uploads/2022/03/Hungarian-Chocolate-3.jpg'}
                  alt={'post.imageLabel'}
                />
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
