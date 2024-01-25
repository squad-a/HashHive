import { useMutation } from '@apollo/client';
import { Button } from '@mui/material';
import { ADD_POST } from '../../utils/query';

const Index = () => {
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
                subtitle: 'This is cool',
                publicationId: '65821026c25b82e69420fd5e',
                contentMarkdown: '## Title here',
                slug: 'this-is-cool',
                tags: {
                  name: 'hashnode'
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
