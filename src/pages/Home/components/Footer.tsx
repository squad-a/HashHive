import * as React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        color: 'text.secondary',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth={false}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant='h6'
            color='text.primary'
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
          >
            <img src='/logo.png' alt='hashhive' style={{ width: '40px', height: '40px' }} />
            <span style={{ marginTop: '1px', fontSize: '25px', color: 'white' }}>LOGO</span>
          </Typography>
        </Grid>

        <p
          color='text.primary'
          style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: '20px' }}
        >
          Home | Blogs | Categories | Trending | Stories
        </p>
        <br />
        <Typography
          variant='body2'
          color='text.secondary'
          align='center'
          style={{ color: 'white', fontSize: '15px' }}
          sx={{ pt: 4 }}
        >
          All rights reserved @logo
          <p style={{ color: 'grey', fontSize: '20px' }}>Privcy Policy|Terms & Services</p>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
