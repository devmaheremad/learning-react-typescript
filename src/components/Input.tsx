import { InputProps } from "./typesForComponents/types";

function Input({ handleChange }: InputProps) {
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
  //   console.log(e.target.value);

  // return <input type="text" onChange={handleChange} />;
  return <input type="text" onChange={(e) => handleChange(e)} />;
}

export default Input;
