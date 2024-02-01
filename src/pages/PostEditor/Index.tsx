import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Button, Container, Grid, Input, InputLabel, TextField, Typography } from '@mui/material';
import { ADD_POST } from '../../utils/query';
import { useAppStore } from '../../utils/store';
import { Box } from '@mui/system';
import MDEditor from '@uiw/react-md-editor';

const Index = () => {
  const publicationId = useAppStore((state) => state.publication_id);
  const [PublishPost, { data, loading, error }] = useMutation(ADD_POST);

  console.log(data, loading, error);
  console.log(JSON.stringify(error, null, 2));

  const [post, setPost] = useState({
    title: '',
    subtitle: '',
    slug: '',
    tags_name: '',
    tags_slug: ''
  });

  const [markdownValue, setMarkdownValue] = useState('');

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    // If the changed field is within tags, handle it separately

    setPost((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  useEffect(() => {
    setPost((prev) => ({
      ...prev,
      slug: post.title.toLowerCase().split(' ').join('-')
    }));
  }, [post.title]);

  useEffect(() => {
    setPost((prev) => ({
      ...prev,
      tags_slug: post.tags_name.toLowerCase().split(' ').join('-')
    }));
  }, [post.tags_name]);

  return (
    <>
      <Container>
        <Typography variant='h3'>Create Post</Typography>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={8}>
            <Container>
              <InputLabel htmlFor='post-title'>Add Title</InputLabel>
              <TextField
                sx={{ marginTop: 1 }}
                fullWidth
                name='title'
                value={post.title}
                onChange={handleInputChange}
                variant='outlined'
              />
              <InputLabel htmlFor='post-sub'>Subtitle</InputLabel>
              <TextField
                sx={{ marginTop: 1 }}
                fullWidth
                name='subtitle'
                value={post.subtitle}
                onChange={handleInputChange}
                variant='outlined'
              />
              <InputLabel sx={{ marginTop: 1 }} htmlFor='post-sub'>
                Post Description
              </InputLabel>
              <Box data-color-mode='light'>
                <MDEditor
                  value={markdownValue}
                  onChange={(value: string | undefined) => setMarkdownValue(value!)}
                />
              </Box>
              <Box display='flex' flexDirection='row' justifyContent='flex-end'>
                <Button
                  color='secondary'
                  size='large'
                  sx={{ margin: 3, backgroundColor: '#3069FC', borderRadius: '20px' }}
                  onClick={() => {
                    PublishPost({
                      variables: {
                        input: {
                          title: post.title,
                          subtitle: post.subtitle,
                          publicationId: publicationId,
                          contentMarkdown: markdownValue,
                          slug: post.slug,
                          tags: {
                            name: post.tags_name,
                            slug: post.tags_slug
                          }
                        }
                      }
                    });
                    setPost({
                      title: '',
                      subtitle: '',
                      slug: '',
                      tags_name: '',
                      tags_slug: ''
                    });
                    setMarkdownValue('');
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <InputLabel htmlFor='featured-image'>Featured Image</InputLabel>
            <Input sx={{ marginTop: 2 }} type='file' aria-describedby='featured-image' />
            <InputLabel htmlFor='slug' sx={{ marginTop: 2 }}>
              Slug
            </InputLabel>
            <TextField
              variant='outlined'
              value={post.slug}
              name='slug'
              onChange={handleInputChange}
              multiline
              rows={3}
            />
            <InputLabel htmlFor='tags_name' sx={{ marginTop: 2 }}>
              Tag name
            </InputLabel>
            <TextField
              value={post.tags_name}
              name='tags_name'
              onChange={handleInputChange}
              variant='outlined'
            />
            <InputLabel htmlFor='tags_slug' sx={{ marginTop: 2 }}>
              Tag slug
            </InputLabel>
            <TextField
              value={post.tags_slug}
              name='tags_slug'
              onChange={handleInputChange}
              variant='outlined'
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Index;
