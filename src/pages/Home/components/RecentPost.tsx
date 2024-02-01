import { Box, Container, Typography } from '@mui/material';
import { FeedPostConnection, Post } from '../../../__generated__/graphql';
import { Card } from '../../../shared/Card';

export const RecentPost = ({ recent }: { recent: FeedPostConnection }) => {
  return (
    <>
      <Container>
        <Typography variant='h3' margin={3}>
          Recent Post
        </Typography>

        <Box display='flex' flexDirection='row' flexWrap='wrap' gap='2' margin={3}>
          {recent.edges.map(({ node }: { node: Post }) => (
            <Card {...node} />
          ))}
        </Box>
      </Container>
    </>
  );
};
