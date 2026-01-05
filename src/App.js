import React, { useState } from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
function App() {
  const [value, setValue] = useState("text in input");

  return (
    <div className="App">
      <ClassCounter />
    </div>
  );
}

export default App;
