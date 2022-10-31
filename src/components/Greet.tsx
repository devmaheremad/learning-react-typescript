import { GreetProps } from "./typesForComponents/types";

export default function Greet({ name, hired, messages }: GreetProps) {
  return (
    <div>
      {hired
        ? `Hey ${name} you have around ${messages} messages`
        : "You don't have any messages"}
    </div>
  );
}
