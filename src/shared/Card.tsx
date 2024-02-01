import { Box, Link, Typography, styled, Button } from '@mui/material';
import { Post } from '../__generated__/graphql';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import noImage from '../assets/no.png';

const ButtonStyled = styled(Button)({
  width: '40%',
  margin: '10px',
  color: '#fff',
  backgroundColor: '#3069FC',
  borderRadius: '30px',
  '&:hover': {
    backgroundColor: '#fff',
    color: 'gray'
  }
});

interface ICard extends Post {}

export const Card = (props: ICard) => {
  console.log(props);

  return (
    <Box
      sx={{ border: '1px solid gray', borderRadius: '15px' }}
      margin={3}
      alignItems={{ md: 'center', lg: 'center' }}
      width={{ xs: '80%', sm: '40%', md: '25%', lg: '25%' }}
      height={{ lg: '50vh' }}
      key={props.id}
    >
      <Box
        component='img'
        width='100%'
        height={{ xs: 200, sm: 120, md: 120, lg: 160 }}
        sx={{ borderRadius: '15px' }}
        src={props.coverImage === null ? noImage : props.coverImage?.url}
        alt={props.author.name}
      />
      <Typography padding={1} style={{ fontSize: '10' }} fontWeight={700}>
        {props.title.length > 40 ? `${props.title.substring(0, 40)}...` : props.title}
      </Typography>
      <Typography padding={1} variant='body2' fontWeight={100}>
        {props.brief.length > 60 ? `${props.brief.substring(0, 60)}...` : props.brief}
      </Typography>
      <Box>
        <Button variant='text' startIcon={<ThumbUpOffAltIcon />}></Button>
        <Button variant='text' startIcon={<ChatBubbleOutlineIcon />}></Button>
        <Button variant='text' startIcon={<BookmarkBorderIcon />}></Button>
        <Button variant='text' startIcon={<ShareIcon />}></Button>
      </Box>
      <Link href={props.url} target='_blank'>
        <ButtonStyled>Read more</ButtonStyled>
      </Link>
    </Box>
  );
};
