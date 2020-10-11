import React, { useState } from "react";

function UseStateHook() {
  const [state, setstate] = useState(0);

  function onCounterClick(byValue) {
    byValue = byValue || 1;
    setstate((prevState) => prevState + byValue);
  }

  return (
    <div>
      <button onClick={() => onCounterClick(1)}>Counter by 1 = {state}</button>
      <button onClick={() => onCounterClick(5)}>
        Increase Counter by 5 = {state}
      </button>
    </div>
  );
}

export default UseStateHook;
