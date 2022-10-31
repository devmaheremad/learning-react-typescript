// import { PersonProps } from "./typesForComponents/types";

import { Name } from "./typesForComponents/types";

type PersonProps = {
  name: Name;
};

export default function Person({ name }: PersonProps) {
  return (
    <div>
      Hey {name.first} {name.last}
    </div>
  );
}
