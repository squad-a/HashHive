import { Post, UserPostConnection } from '../../../__generated__/graphql';
import { Card } from '../../../shared/Card';

export const MyPost = ({ posts }: { posts: UserPostConnection }) => {
  console.log('MyPost', posts.nodes);
  return (
    <>
      {posts.nodes.map((post: Post) => (
        <Card {...post} />
      ))}
    </>
  );
};
