import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
function App() {
  const [value, setValue] = useState("text in input");

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>JavaScript</strong>
          <div>
            <p>JS - programming language</p>
          </div>
        </div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
}

export default App;
