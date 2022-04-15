import { useState } from "react";
import "./App.css";
import Timer from "./Components/Timer";

function App() {
   return (
      <div className="App">
         <Timer initial="2" final ="10" />
      </div>
   );
}

export default App;
