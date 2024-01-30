import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER_AND_INITIAL_DATA } from '../../utils/query';
import { Navbar } from './components/Navbar';
import { RecentPost } from './components/RecentPost';
import { PersonalizedPost } from './components/PersonalizedPost';
import Footer from './components/Footer';

const Index = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER_AND_INITIAL_DATA);
  console.log(data);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>something went wrong</div>;

  return (
    <>
      <Navbar me={data.me} />
      <RecentPost recent={data.recent} />
      <PersonalizedPost personalized={data.personalized} />
      <Footer />
    </>
  );
};

export default Index;
