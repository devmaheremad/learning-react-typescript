import { useState } from "react";

function LoggedIn() {
  const [logged, setLogged] = useState(false);
  const handleLoggedIn = () => setLogged(true);
  const handleLoggedOut = () => setLogged(false);
  return (
    <>
      <button onClick={handleLoggedIn}>Login</button>
      <button onClick={handleLoggedOut}>Logout</button>
      <div>{logged ? "User is loggedin" : "User is loggedout"}</div>
    </>
  );
}

export default LoggedIn;
