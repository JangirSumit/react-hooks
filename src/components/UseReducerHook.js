import React, { useReducer } from "react";

const initialState = { counter: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload };
    case "DECREMENT":
      return { ...state, counter: state.counter - action.payload };
    default:
      return initialState;
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default UseReducerHook;
