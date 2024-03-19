import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logoImage from '../../assets/logo.png';

function TopNav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <AppBar position="static" sx={{ marginBottom: 3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logoImage} alt="Logo" className="h-20 w-20 mr-2" /> {/* Image added here */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            STORE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem >
                <Typography textAlign="center">gg</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Link to="/home" style={{ textDecoration: 'none' }}>
              <Button
                key={1}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                HOME
              </Button>
            </Link>
            
            <Link to="/items" style={{ textDecoration: 'none' }}>
              <Button
                key={1}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                items
              </Button>
            </Link>

            <Link to="/review" style={{ textDecoration: 'none' }}>
              <Button
                key={1}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                review
              </Button>
            </Link>

            <Link to="/hotdeals" style={{ textDecoration: 'none' }}>
              <Button
                key={1}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Hot Deals
              </Button>
            </Link>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button sx={{ mr: 1, color: 'inherit' }}>Signin</Button></Link>

            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button sx={{ ml: 1, color: 'inherit' }}>Signup</Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopNav;
