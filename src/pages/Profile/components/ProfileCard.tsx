import { MyUser } from '../../../__generated__/graphql';

export const ProfileCard = (props: { me: MyUser }) => {
  const { me } = props;

  console.log(me.posts);

  return (
    <>
      <div>
        <h1>Profile</h1>
        {me.profilePicture && <img src={me.profilePicture} alt={me.username} />}
        <p>Name: {me.name}</p>
        <p>Username: {me.username}</p>

        <p>Followers: {me.followersCount}</p>
        <p>Following: {me.followingsCount}</p>
      </div>

      <h1>Post</h1>
    </>
  );
};
