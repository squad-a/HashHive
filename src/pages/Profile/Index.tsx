import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER_AND_INITIAL_DATA } from '../../utils/query';
import { Navbar } from '../Home/components/Navbar';
import { ProfileCard } from './components/ProfileCard';

import Button from '@mui/material/Button';
import Footer from '../Home/components/Footer';
import { PersonalizedPost } from '../Home/components/PersonalizedPost';

const Index = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER_AND_INITIAL_DATA);
  console.log(data);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>something went wrong</div>;

  // Add a check for data.me and data.me.posts.nodes

  return (
    <section>
      <Navbar me={data.me} />
      <ProfileCard me={data.me} />

      <Button
        variant='contained'
        style={{ marginTop: '20px', backgroundColor: '#007bff', width: '90px' }}
      >
        Blogs
      </Button>

      <PersonalizedPost personalized={data.personalized} />
      <Footer />
    </section>
  );
};

export default Index;
