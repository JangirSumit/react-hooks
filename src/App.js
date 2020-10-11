import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import UseContextHook from "./components/UseContextHook";
import UseReducerHook from "./components/UseReducerHook";

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UseReducerHook />
      <UseStateHook />
      <UserContext.Provider value={"Sumit Jangir"}>
        <UseContextHook />
      </UserContext.Provider>
      <UseEffectHook />
    </div>
  );
}

export default App;
