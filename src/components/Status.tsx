import { StatusProps } from "./typesForComponents/types";

function Status({ status }: StatusProps) {
  let msgStatus: string;
  if (status === "loading") {
    msgStatus = "Loading...";
  } else if (status === "success") {
    msgStatus = "Data fetched successfully";
  } else {
    msgStatus = "Data failured to fetch";
  }
  return <h2>Status - {msgStatus}</h2>;
}

export default Status;
