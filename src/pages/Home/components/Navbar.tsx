import { MyUser } from '../../../__generated__/graphql';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../../utils/store';

const Search = styled('div')(({ theme }) => ({
  color: 'black',
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: alpha(theme.palette.common.white, 0.7),
  border: '1px solid black',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '350px',
  padding: theme.spacing(0.5),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3)
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  color: 'black',
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '300%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}));

export const Navbar = ({ me }: { me: MyUser }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const removeTokenAndPublicationId = useAppStore((state) => state.removeTokenAndPublicationId);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate();

  console.log(me);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    removeTokenAndPublicationId();
    navigate('/auth');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link style={{ textDecoration: 'none', color: '#212121' }} to='/profile'>
          Profile
        </Link>
      </MenuItem>
      {/* //Todo how can i place logout functionality */}
      <MenuItem onClick={handleLogOut}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link
          style={{ display: 'flex', gap: '5px', textDecoration: 'none', color: '#212121' }}
          to='/profile'
        >
          <AccountCircle /> Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleLogOut}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Link to='/'>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
            >
              <img
                src='/logo.png'
                alt='hashhive'
                style={{ width: '55px', height: '55px', marginLeft: '10px' }}
              />
            </IconButton>
          </Link>
          <Search sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search blog' inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent'
                }
              }}
              size='large'
              color='inherit'
            >
              <Link to='/create-blog'>
                <Button
                  variant='contained'
                  color='error'
                  style={{ backgroundColor: '#2196f3', borderRadius: '20px', color: 'white' }}
                >
                  <EditCalendarOutlinedIcon />
                  Write Blog
                </Button>
              </Link>
            </IconButton>
            <Typography style={{ color: 'black', marginTop: '25px' }}>
              Hello! {me.username}
            </Typography>
            <IconButton
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent'
                }
              }}
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              {me.profilePicture && (
                <Avatar
                  alt={me.name}
                  src={me.profilePicture}
                  sx={{ width: 48, height: 48 }}
                  style={{ marginRight: '40px' }}
                />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              sx={{ color: 'black' }}
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
