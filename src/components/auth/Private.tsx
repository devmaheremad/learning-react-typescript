import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggeding: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggeding, component: Component }: PrivateProps) => {
  if (isLoggeding) {
    return <Component name="Maher" />;
  } else {
    return <Login />;
  }
};

export default Private;
