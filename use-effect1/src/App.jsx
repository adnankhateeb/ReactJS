import { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
   const [show, setShow] = useState(true);
   return (
      <div className="App">
         {show ? <Todo /> : null}
         <button
            onClick={() => {
               setShow(!show);
            }}
         >
            {show ? "Hide" : "Show"} Todos
         </button>
      </div>
   );
}

export default App;

// function App() {
//    const [age, setAge] = useState(12);
//    const [counter, setCounter] = useState(0);

//    useEffect(() => {
//       console.log("Counter changed");
//    }, [counter]);

//    useEffect(() => {
//       console.log("Age changed");
//    }, [age]);

//    return (
//       <div className="App">
//          <div className="counter">
//             <h1>{counter}</h1>
//          </div>
//          <button
//             onClick={() => {
//                setCounter(counter + 1);
//             }}
//          >
//             Add Counter
//          </button>
//          <div className="age">
//             <h1>{age}</h1>
//          </div>
//          <button
//             onClick={() => {
//                setAge(age + 1);
//             }}
//          >
//             Add Age
//          </button>
//       </div>
//    );
// }

// export default App;
