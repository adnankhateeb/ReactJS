import "./App.css";
import Todo from "./components/Todo";

function App() {
   return (
      <div className="App">
         <Todo />
      </div>
   );
}

// import { useState } from "react";
// function App() {
//    const dataFn = (data) => {
//       console.log("Data is", data);
//       setMessage(data);
//    };
//    const [message, setMessage] = useState("");
//    return (
//       <div className="App">
//          <First data={dataFn} />
//          <Second message={message} />
//       </div>
//    );
// }

// const First = ({ data }) => {
//    //  console.log(data);
//    data("From first world");
//    return <h1>First </h1>;
// };
// const Second = ({ message }) => {
//    console.log("in second sibling", message);
//    return <h1>Second</h1>;
// };

export default App;
