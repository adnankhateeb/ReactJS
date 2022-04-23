import { useState } from "react";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import { Timer } from "./components/Timer";

function App() {
   const [showComp, setShowComp] = useState(true);
   const handleShow = () => {
      setShowComp(!showComp);
   };
   return (
      <div className="App">
         <div className="components">
            {showComp ? <Timer /> : <Stopwatch />}
         </div>
         <button onClick={handleShow}>{showComp ? 'Stopwatch' : 'Timer'}</button>
      </div>
   );
}

export default App;
