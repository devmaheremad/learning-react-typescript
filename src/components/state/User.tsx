import { useState } from "react";
import { UserProps } from "../typesForComponents/types";

function User() {
  const [userLogin, setUserLogin] = useState<UserProps | null>({} as UserProps);
  const handleLogin = (): void =>
    setUserLogin({
      name: "Maher",
      email: "maher@example.com",
    });
  const handleLogout = (): void => setUserLogin(null);
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {userLogin !== null ? (
        <div>
          <p>User Loggedin</p>
          <p>Name is {userLogin.name}</p>
          <p>Email is {userLogin.email}</p>
        </div>
      ) : (
        <div>"User loggedout"</div>
      )}
    </>
  );
}

export default User;
