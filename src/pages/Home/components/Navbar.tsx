import { MyUser } from '../../../__generated__/graphql';

export const Navbar = ({ me }: { me: MyUser }) => {
  return (
    <div>
      <h1>{me.name}</h1>

      {me.profilePicture && <img width={50} height={50} src={me.profilePicture} alt={me.name} />}
    </div>
  );
};
