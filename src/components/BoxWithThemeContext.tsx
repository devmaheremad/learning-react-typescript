import { useContext } from "react";
import { ContextTheme } from "./context/ContextTheme";

function BoxWithThemeContext() {
  const theme = useContext(ContextTheme);
  return (
    <>
      <p
        style={{
          color: theme.dark.text,
          backgroundColor: theme.light.text,
          padding: "1rem",
        }}
      >
        Hello Context
      </p>
    </>
  );
}

export default BoxWithThemeContext;
