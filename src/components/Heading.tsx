import { HeadingProps } from "./typesForComponents/types";

function Heading({ children }: HeadingProps) {
  return <h2>{children}</h2>;
}

export default Heading;
