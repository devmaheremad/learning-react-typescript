export type ProfileProps = {
  name: string;
};

function Profile({ name }: ProfileProps) {
  return (
    <>
      <h5>Welcome back to your Profile {name}.</h5>
    </>
  );
}

export default Profile;
