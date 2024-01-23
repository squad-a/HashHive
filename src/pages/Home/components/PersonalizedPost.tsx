import { FeedPostConnection, Post } from '../../../__generated__/graphql';

export const PersonalizedPost = ({ personalized }: { personalized: FeedPostConnection }) => {
  return (
    <div>
      <h1>Personalized Post</h1>

      {personalized.edges.map(({ node }: { node: Post }) => (
        <div key={node.id}>
          <h1 style={{ fontSize: '30' }}>{node.title}</h1>
          <p>{node.brief}</p>
          <img width={200} height={100} src={node.coverImage?.url} alt={node.author.name} />

          <a href={node.url} target='_blank'>
            <button>Read more</button>
          </a>
        </div>
      ))}
    </div>
  );
};
