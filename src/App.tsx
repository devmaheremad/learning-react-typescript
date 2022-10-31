import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Maher from "./components/Maher";
import Person from "./components/Person";
import PersonLists from "./components/PersonLists";
import Status from "./components/Status";
import Container from "./components/Container";
import Button from "./components/Button";
import Input from "./components/Input";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import Counter from "./components/state/Counter";
import BoxWithThemeContext from "./components/BoxWithThemeContext";
import { ThemeContextProvider } from "./components/context/ContextTheme";
import { ContextNamesListProvider } from "./components/context/ContextNamesList";
import BoxForContextNamesList from "./components/BoxForContextNamesList";
import UserLoginInfo from "./components/UserLoginInfo";
import { ContextUserLoginInfoProvider } from "./components/context/ContextUserLoginInfo";
import FocusInput from "./components/ref/FocusInput";
import MutableRef from "./components/ref/MutableRef";
import TestPropsState from "./components/class/TestPropsState";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import { List } from "./components/generics/List";

function App() {
  const personName = {
    first: "Maher",
    last: "Alshharawi",
  };
  const personLists = [
    { id: 0, first: "Maher", last: "Almashharawi" },
    { id: 1, first: "Leen", last: "Fanous" },
    { id: 2, first: "Omer", last: "Almashharawi" },
  ];
  return (
    <>
      <h1>Hello Here</h1>
      {/* <Person fName="Maher" lName="Emad" /> */}
      <Person name={personName} />
      <Greet name="Maher" messages={10} hired={true} />
      <PersonLists family={personLists} />
      <Status status="success" />
      <Heading>Heading Children</Heading>
      <Maher>
        <Heading>Maher goes to Germany</Heading>
      </Maher>
      <Button
        handleClicked={(e, id) => console.log("Button Clicked", e.target, id)}
      />
      <Input handleChange={(e) => console.log(e.target.value)} />
      <Container styles={{ border: "1px dashed #00bcd4", padding: "1rem" }} />
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <BoxWithThemeContext />
      </ThemeContextProvider>
      <ContextNamesListProvider>
        <BoxForContextNamesList />
      </ContextNamesListProvider>
      <ContextUserLoginInfoProvider>
        <UserLoginInfo />
      </ContextUserLoginInfoProvider>
      <FocusInput />
      <MutableRef />
      <TestPropsState msg="msg" />
      <Private isLoggeding={true} component={Profile} />
      <List items={["A", "B"]} onClick={(item) => console.log(item)} />
    </>
  );
}

export default App;
