import { useQuery } from '@apollo/client';
import { AUTHENTICATE } from '../../utils/query';
import { Navbar } from './components/Navbar';

const Index = () => {
  const { data, loading } = useQuery(AUTHENTICATE);
  console.log(data);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Navbar me={data.me} />
    </div>
  );
};

export default Index;
