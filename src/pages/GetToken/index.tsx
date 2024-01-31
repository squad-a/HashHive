import { Container } from '@mui/material';
import { content } from './getTokenBlog';
import Markdown from 'react-markdown';

export const GetToken = () => {
  return (
    <>
      <Container sx={{ fontFamily: 'Poppins' }}>
        <Markdown>{content}</Markdown>;
      </Container>
    </>
  );
};
