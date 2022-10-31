import { createContext, useState } from "react";
type UserAuth = {
  name: string;
  email: string;
};

type UserAuthSetUser = {
  user: null | UserAuth;
  setUser: React.Dispatch<React.SetStateAction<UserAuth | null>>;
};

export const ContextUserLoginInfo = createContext({} as UserAuthSetUser);

type ContextUserLoginInfoProps = {
  children: React.ReactNode;
};

export const ContextUserLoginInfoProvider = ({
  children,
}: ContextUserLoginInfoProps) => {
  const [user, setUser] = useState<UserAuth | null>(null);
  return (
    <ContextUserLoginInfo.Provider value={{ user, setUser }}>
      {children}
    </ContextUserLoginInfo.Provider>
  );
};
