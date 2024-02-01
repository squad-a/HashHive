import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER_PROFILE_WITH_POSTS } from '../../utils/query';
import { Navbar } from '../Home/components/Navbar';
import { ProfileCard } from './components/ProfileCard';
import Footer from '../Home/components/Footer';
import { MyPost } from './components/MyPost';
import { Spinner } from '../../shared/Spinner';
import { Box, Container, Typography } from '@mui/material';

const Index = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER_PROFILE_WITH_POSTS);
  console.log(data);

  if (loading) return <Spinner />;

  if (error) return <div>something went wrong</div>;

  //todo make something went wrong page and add user's post section

  return (
    <section>
      <Navbar me={data.me} />
      <ProfileCard me={data.me} />
      <Container>
        <Typography variant='h3' sx={{ margin: '20px', textAlign: 'center' }}>
          My Blogs
        </Typography>
        <Box
          display='flex'
          flexWrap='wrap'
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
        >
          <MyPost posts={data.me.posts} />
        </Box>
      </Container>
      <Footer />
    </section>
  );
};

export default Index;
