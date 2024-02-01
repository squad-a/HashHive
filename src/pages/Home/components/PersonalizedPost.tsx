import { Box, Container, Typography } from '@mui/material';
import { FeedPostConnection, Post } from '../../../__generated__/graphql';
import { Card } from '../../../shared/Card';

export const PersonalizedPost = ({ personalized }: { personalized: FeedPostConnection }) => {
  console.log(personalized);
  return (
    <Container>
      <Typography variant='h3' margin={3}>
        Personalized Post
      </Typography>

      <Box display='flex' flexDirection='row' flexWrap='wrap'>
        {personalized.edges.map(({ node }: { node: Post }) => (
          <Card {...node} />
        ))}
      </Box>
    </Container>
  );
};
