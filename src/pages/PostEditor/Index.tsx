import { useMutation } from '@apollo/client';
import { Button } from '@mui/material';
import { ADD_POST } from '../../utils/query';
import { useAppStore } from '../../utils/store';

const Index = () => {
  const publicationId = useAppStore((state) => state.publication_id);
  const [PublishPost, { data, loading, error }] = useMutation(ADD_POST);

  console.log(data, loading, error);

  return (
    <div>
      <Button
        onClick={() =>
          PublishPost({
            variables: {
              input: {
                title: 'Hey welcome',
                subtitle: 'Intro about me',
                publicationId: publicationId,
                contentMarkdown: '## Title here',
                slug: 'intro-about-me',
                tags: {
                  name: 'test',
                  slug: 'test'
                }
              }
            }
          })
        }
      >
        Submit
      </Button>
    </div>
  );
};

export default Index;
