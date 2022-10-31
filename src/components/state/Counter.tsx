import { useReducer } from "react";
import {
  CounterActionForAddOrSub,
  CounterActionForReset,
  CounterState,
} from "../typesForComponents/types";

const initState = {
  count: 0,
};

type CounterAction = CounterActionForAddOrSub | CounterActionForReset;

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.amount };
    case "decrement":
      return { count: state.count - action.amount };
    case "reset":
      return initState;
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <button onClick={() => dispatch({ type: "increment", amount: 10 })}>
        increment
      </button>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", amount: 10 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

export default Counter;
