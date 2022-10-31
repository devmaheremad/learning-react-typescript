import { ContainerProps } from "./typesForComponents/types";

function Container({ styles }: ContainerProps) {
  return <span style={styles}>This is container component</span>;
}

export default Container;
