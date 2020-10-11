import React, { useEffect, useState } from "react";

const initialTodos = [];

function UseEffectHook() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    async function fetchData() {
      const response = fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await (await response).json();

      setTodos(result);
    }
    fetchData();
  }, [todos]);

  return (
    <div>
      {todos.length ? todos.map((a) => <div key={a.id}>{a.title}</div>) : ""}
    </div>
  );
}

export default UseEffectHook;
