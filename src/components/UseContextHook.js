import React, { useContext } from "react";
import { UserContext } from "../App";

function UseContextHook() {
  const user = useContext(UserContext);
  return <h1>{user}</h1>;
}

export default UseContextHook;
