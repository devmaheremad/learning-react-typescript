import { ButtonProps } from "./typesForComponents/types";

function Button({ handleClicked }: ButtonProps) {
  return <button onClick={(e) => handleClicked(e, 1)}>Button</button>;
}

export default Button;
