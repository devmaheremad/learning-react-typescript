import { useContext } from "react";
import { ContextUserLoginInfo } from "./context/ContextUserLoginInfo";

function UserLoginInfo() {
  const nuserInfo = useContext(ContextUserLoginInfo);
  return (
    <>
      <button
        onClick={() => {
          nuserInfo.setUser({ name: "Maher", email: "Maher@example.com" });
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          nuserInfo.setUser(null);
        }}
      >
        Logout
      </button>
      <div>
        <p>Name is {nuserInfo.user?.name}</p>
        <p>Email is {nuserInfo.user?.email}</p>
      </div>
    </>
  );
}

export default UserLoginInfo;
