import { MyUser } from '../../../__generated__/graphql';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const ProfileCard = (props: { me: MyUser }) => {
  const { me } = props;

  return (
    <Box>
      <Box display='flex' alignItems='center'>
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

        <Box>
          <Box
            display='flex'
            justifyContent='space-between'
            marginTop={2} // Adjust the top margin
          >
            <Box textAlign='center'>
              <Typography variant='h6' fontWeight='bold' marginRight='20px'>
                10K
              </Typography>
              <Typography color='textSecondary'>Likes</Typography>
            </Box>

            <Box textAlign='center'>
              <Typography variant='h6' fontWeight='bold'>
                100
              </Typography>
              <Typography color='textSecondary'>Blogs</Typography>
            </Box>

            <Box textAlign='center'>
              <Typography variant='h6' fontWeight='bold' marginLeft='10px'>
                1K
              </Typography>
              <Typography color='textSecondary' marginLeft='20px'>
                Comments
              </Typography>
            </Box>
          </Box>

          <Typography color='textSecondary' marginTop={1}>
            @{me.username}
          </Typography>
        </Box>
      </Box>

      <Box display={'flex'}>
        <Typography variant='h6' fontWeight='bold' style={{ marginLeft: '30px' }}>
          Durgesh Kiranpure
        </Typography>
        <Typography
          fontWeight='bold'
          style={{ color: 'rgb(135,206,250)', marginLeft: '20px', marginTop: '5px' }}
        >
          Edit Profile
        </Typography>
      </Box>
      <Typography style={{ width: '1296px', marginLeft: '30px', marginTop: '10px' }}>
        ohn Smith is a fictional character known for his adventurous spirit and insatiable
        curiosity. Born and raised in a small town nestled in the countryside, John developed a love
        for exploration at an early age.
      </Typography>
    </Box>
  );
};
