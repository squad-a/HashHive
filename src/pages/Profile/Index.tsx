import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER_PROFILE_WITH_POSTS } from '../../utils/query';
import { ProfileCard } from './components/ProfileCard';
import { Post } from '../../__generated__/graphql';

const Index = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER_PROFILE_WITH_POSTS);

  console.log(data, error);

  if (loading) return <p>Loading...</p>;

  return (
    <section>
      <ProfileCard me={data.me} />

      <h1>Post</h1>

      {data.me.posts.nodes.map((post: Post) => (
        <div key={post.id}>
          {post.url && <img src={post.url} />}
          <p>{post.title}</p>
          <p>{post.subtitle}</p>

          <p>Likes:{post.reactionCount}</p>
          <p>Comments:{post.replyCount}</p>
        </div>
      ))}
    </section>
  );
};

export default Index;
