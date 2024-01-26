import { useState } from 'react';
import { useAppStore } from '../../utils/store';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, styled, Button, TextField } from '@mui/material';
import Ellipse from '../../assets/Ellipse 766.png';
import typewriter from '../../assets/undraw_typewriter_re_u9i2 1.png';
import { useQuery } from '@apollo/client';
import { GET_PUBLICATION } from '../../utils/query';

const Index = () => {
  const [token, setToken] = useState('');
  const [host, setHost] = useState('');
  const setTokenAndPublicationId = useAppStore((state) => state.setTokenAndPublicationId);
  const { data } = useQuery(GET_PUBLICATION, { variables: { host } });

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (host === '' && token === '') return;

    console.log('button working');
    console.log('check 1', data, token, host);
    setTokenAndPublicationId({
      token,
      id: data.publication.id
    });

    setTimeout(() => {
      navigate('/');
      setToken('');
      setHost('');
    }, 500);
  };

  const CircleBox = styled(Box)({
    height: '25px',
    width: '25px',
    backgroundColor: '#bbb',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '5px'
  });
  const ButtonStyled = styled(Button)({
    width: '30%',
    // margin: '5px',
    color: '#fff',
    backgroundColor: '#3069FC',
    borderRadius: '30px',
    '&:hover': {
      backgroundColor: '#fff',
      color: 'gray'
    }
  });

  return (
    <>
      <Box
        width={{ lg: '100%' }}
        height={{ lg: '65px' }}
        sx={{ position: 'absolute', top: '44px', left: '115px' }}
      >
        <img src={Ellipse} />
      </Box>
      <Grid
        container
        spacing={2}
        marginTop={{ xs: 13, lg: 6 }}
        padding={{ xs: 2, lg: 8 }}
        display='flex'
        flexDirection={{ xs: 'column', md: 'row' }}
        width={{ xs: '100%' }}
      >
        <Grid item xs={12} md={6}>
          <Box display='flex' flexDirection='column' padding={{ xs: '3', md: '5' }}>
            <img width='307px' height='237.29px' src={typewriter} />
            <Typography variant='h3' fontWeight={500} margin={3}>
              Let’s read & Write
            </Typography>
            <Typography
              variant='body1'
              fontWeight={200}
              marginLeft={3}
              width={{ xs: '70%', lg: '70%' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box padding={3}>
              <CircleBox></CircleBox>
              <CircleBox sx={{ background: '#3069FC' }}></CircleBox>
              <CircleBox></CircleBox>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            width={{ lg: '554px' }}
            height={{ lg: '400px' }}
            padding={6}
            sx={{ backgroundColor: '#E6EFFF', borderRadius: '30px' }}
          >
            <Typography variant='h3' fontWeight={500} padding={1}>
              Log in
            </Typography>
            <Typography variant='h6' fontWeight={200} padding={1} width={{ lg: '70%' }}>
              Lorem ipsum dolor sit amet,
            </Typography>
            <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column'>
              <TextField
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '30px' // Add borderRadius for the outlined input
                  },
                  padding: '10px'
                }}
                name='host'
                value={host}
                onChange={(e) => setHost(e.target.value)}
                placeholder='eg: johndoe.hashnode.dev'
              />
              <TextField
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '30px' // Add borderRadius for the outlined input
                  },
                  padding: '10px'
                }}
                name='token'
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder='Paste Access Token'
              />
              <ButtonStyled type='submit' sx={{ margin: '15px' }}>
                Submit
              </ButtonStyled>
            </Box>
            <Typography padding={2}>Where i get token? | Don’t have a token</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
