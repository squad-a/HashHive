import { FeedPostConnection, Post } from '../../../__generated__/graphql';

export const RecentPost = ({ recent }: { recent: FeedPostConnection }) => {
  return (
    <>
      {recent.edges.map(({ node }: { node: Post }) => (
        <div key={node.id}>
          <h1 style={{ fontSize: '10' }}>{node.title}</h1>
          <p>{node.brief}</p>
          <img width={200} height={100} src={node.coverImage?.url} alt={node.author.name} />

          <a href={node.url} target='_blank'>
            <button>Read more</button>
          </a>
        </div>
      ))}
    </>
  );
};
