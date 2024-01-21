import { useState } from 'react';
import { useAppStore } from '../../utils/store';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [token, setToken] = useState('');
  const setAccessToken = useAppStore((state) => state.setAccessToken);

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setAccessToken(token);
    navigate('/');
    setToken('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name='token'
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder='Paste Access Token'
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Index;
