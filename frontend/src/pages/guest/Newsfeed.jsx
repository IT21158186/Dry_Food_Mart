import React, { useState, useEffect } from 'react'
import MainFeaturedPost from '../../components/NewsFeed/MainFeaturedPost';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../common/AuthContext';
import authAxios from '../../utils/authAxios';
import { apiUrl } from '../../utils/Constants';

export default function Newsfeed() {
  const { userRole } = useAuth();
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const res = await authAxios.get(`${apiUrl}/news`);
      setNews(res.data);
      console.log(res.data)
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 404) {
        toast.error('Products not found');
      } else {
        toast.error(error.response?.data?.message || 'An error occurred');
      }
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <MainFeaturedPost />

      {/* {userRole === 'customer' && (
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
                          <Favorite color='error' />
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
      )} */}

      <div className='mt-7'>
        <Typography variant='h4' className='text-center'> Latest </Typography>
        <Grid container direction="row" spacing={2} marginTop={1}>
          {news.filter(review => review.status !== 'pending').map((review) => (
            <Grid item xs={12} md={6}>
              <CardActionArea component="a" onClick={() => navigate(`/news/${review._id}`)} >
                <Card sx={{ display: 'flex' }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                      {review.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {review.updatedAt}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {review.description}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Continue reading...
                    </Typography>
                    {/* {userRole === 'customer' && (
                      <div disableSpacing className='text-left'>
                        <IconButton aria-label="add to favorites">
                          <Favorite />
                        </IconButton>
                      </div>
                    )} */}
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{ height: 205, width: 180, display: { xs: 'none', sm: 'block' } }}
                    image={review.img}
                    alt={review.title}
                  />
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}
