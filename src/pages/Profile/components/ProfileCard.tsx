// import { MyUser } from '../../../__generated__/graphql';

// export const ProfileCard = (props: { me: MyUser }) => {
//   const { me } = props;

//   console.log(me.posts);

//   return (
//     <>
//       <div>

//         {me.profilePicture && <img src={me.profilePicture} alt={me.username} />}

//         <p>10K</p>
//         <p>Likes</p>

//         <p>100</p>
//         <p>Blogs</p>

//         <p>1K</p>
//         <p>Comments</p>

//         <p>@durgeshkiranpure</p>

//       </div>

//     </>
//   );
// };

// import { MyUser } from '../../../__generated__/graphql';

// export const ProfileCard = (props: { me: MyUser }) => {
//   const { me } = props;

//   return (

//     <div style={{ display: 'flex', alignItems: 'center' }}>

//       {me.profilePicture && (
//         <img
//           src={me.profilePicture}
//           alt={me.username}
//           style={{
//             borderRadius: '50%',
//             width: '200px', // Adjust the size as needed
//             height: '200px', // Adjust the size as needed
//             marginRight: '30px', // Adjust the spacing between image and text
//             marginTop:'70px',
//             marginLeft:'50px'
//           }}
//         />
//       )}

//       <div >

//         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>

//           <div style={{ textAlign: 'center' }}>
//             <p style={{fontWeight: 'bold',fontSize: '1.5em'}} >10K</p>
//             <p style={{  color: '#888' }}>Likes</p>
//           </div>

//           <div style={{ textAlign: 'center' }}>
//             <p style={{fontWeight: 'bold',fontSize: '1.5em'}} >100</p>
//             <p style={{  color: '#888' }}>Blogs</p>
//           </div>

//           <div style={{ textAlign: 'center' }}>
//             <p style={{fontWeight: 'bold',fontSize: '1.5em'}} >1K</p>
//             <p style={{ color: '#888' }}>Comments</p>
//           </div>

//         </div>

//         <p style={{ fontSize: '1.2em', fontWeight: 'bold', marginTop: '5px' }}>@durgeshkiranpure</p>

//       </div>
//     </div>
//   );
// };

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
    </Box>
  );
};
