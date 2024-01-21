interface INavbar {
  me: {
    profilePicture: string;
    name: string;
    username: string;
  };
}

export const Navbar = ({ me }: INavbar) => {
  return (
    <div>
      <h1>{me.name}</h1>
      <img width={50} height={50} src={me.profilePicture} alt={me.name} />
    </div>
  );
};
