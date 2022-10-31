export type ButtonProps = {
  handleClicked: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export type ContainerProps = {
  styles: React.CSSProperties;
};

export type GreetProps = {
  name: string;
  messages?: number;
  hired: boolean;
};

export type HeadingProps = {
  children: string;
};

export type InputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type MaherProps = {
  children: React.ReactNode;
};
export type Name = {
  first: string;
  last: string;
};

export type PersonProps = {
  name: Name;
};

export type PersonListsProps = {
  family: { id: number; first: string; last: string }[];
};

export type StatusProps = {
  status: "loading" | "success" | "failure";
};

export type UserProps = {
  name: string;
  email: string;
};

export type CounterState = {
  count: number;
};

export type CounterActionForAddOrSub = {
  type: "increment" | "decrement";
  amount: number;
};

export type CounterActionForReset = {
  type: "reset";
};
