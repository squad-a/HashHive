import { Grid } from '@mui/material';
import { MyUser } from '../../../__generated__/graphql';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EditNoteIcon from '@mui/icons-material/EditNote';

export const ProfileCard = (props: { me: MyUser }) => {
  const { me } = props;

  const mainBoxStyle = {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px'
  };

  //todo fix UI issue
  return (
    <>
      <Grid sx={mainBoxStyle}>
        <Grid xs={6} gap={4}>
          {me.profilePicture && (
            <Avatar
              src={me.profilePicture}
              alt={me.username}
              sx={{
                width: 200,
                height: 200,
                marginRight: 3, // Adjust the spacing between image and text
                marginTop: 7, // Adjust the top margin
                marginLeft: 5 // Adjust the left margin
              }}
            />
          )}
        </Grid>
        <Grid item xs={6}>
          <Box
            display='flex'
            justifyContent='space-between'
            // marginTop={8} // Adjust the top margin
            marginTop={{ xs: 1, lg: 8 }} // Adjust the top margin
          >
            <Box textAlign='center'>
              <Typography variant='h6' fontWeight='bold' marginRight='20px'>
                {me.posts.totalDocuments}
              </Typography>
              <Typography color='textSecondary'>Posts</Typography>
            </Box>

            <Box textAlign='center'>
              <Typography variant='h6' fontWeight='bold'>
                {me.followersCount}
              </Typography>
              <Typography color='textSecondary'>Followers</Typography>
            </Box>

            <Box textAlign='center'>
              <Typography variant='h6' fontWeight='bold' marginLeft='10px'>
                {me.followingsCount}
              </Typography>
              <Typography color='textSecondary' marginLeft='20px'>
                Following
              </Typography>
            </Box>
          </Box>

          <Typography color='textSecondary' marginTop={1} marginBottom={{ xs: 3, lg: 10 }}>
            @{me.username}
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px'
        }}
        width='90%'
        margin={{ sm: 3 }}
      >
        <Typography variant='h6' fontWeight='bold'>
          {me.name}
        </Typography>
        <Typography
          display='flex'
          flexDirection='row'
          alignItems='center'
          variant='body1'
          fontSize={13}
          sx={{ color: ' #3069FC', cursor: 'pointer' }}
        >
          <EditNoteIcon />
          Edit Profile
        </Typography>
      </Box>
      <Box sx={mainBoxStyle}>
        <Typography sx={{ width: { xs: '80%', md: '60%' }, marginTop: 3 }}>
          {me.bio?.text}
        </Typography>
      </Box>
    </>
  );
};
