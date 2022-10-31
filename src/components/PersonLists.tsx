import { PersonListsProps } from "./typesForComponents/types";

export default function PersonLists({ family }: PersonListsProps) {
  let familyItem = family.map((name) => {
    return (
      <li key={name.id}>
        {name.first} {name.last}
      </li>
    );
  });
  return <ul>{familyItem}</ul>;
}
