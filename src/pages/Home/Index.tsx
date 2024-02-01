import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER_AND_INITIAL_DATA } from '../../utils/query';
import { Navbar } from './components/Navbar';
import { RecentPost } from './components/RecentPost';
import { PersonalizedPost } from './components/PersonalizedPost';
import Footer from './components/Footer';
import { Spinner } from '../../shared/Spinner';

const Index = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER_AND_INITIAL_DATA);
  console.log(data);

  console.log('loading', loading);

  if (loading) return <Spinner />;

  //todo Add a Reload page
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
