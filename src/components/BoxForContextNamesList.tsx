import { useContext } from "react";
import { ContextNamesList } from "./context/ContextNamesList";

function BoxForContextNamesList() {
  const names = useContext(ContextNamesList);
  return (
    <>
      <div>{names.modern[0]}</div>
    </>
  );
}

export default BoxForContextNamesList;
