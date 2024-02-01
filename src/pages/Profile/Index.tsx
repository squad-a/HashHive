import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER_PROFILE_WITH_POSTS } from '../../utils/query';
import { Navbar } from '../Home/components/Navbar';
import { ProfileCard } from './components/ProfileCard';

import Button from '@mui/material/Button';
import Footer from '../Home/components/Footer';
import { MyPost } from './components/MyPost';
import { Spinner } from '../../shared/Spinner';
import { Box } from '@mui/material';

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
      <Box display='flex' flexDirection='column' width='100%' alignItems='center' mb={3}>
        <Button variant='contained' sx={{ marginTop: '20px', backgroundColor: '#007bff' }}>
          Blogs
        </Button>
      </Box>

      <MyPost posts={data.me.posts} />
      <Footer />
    </section>
  );
};

export default Index;
