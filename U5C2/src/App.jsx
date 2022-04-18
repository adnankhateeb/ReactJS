import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import './App.css'

function App() {
   const [show, setShow] = useState(false);

   const handleShow = () => {
      setShow(!show);
   };
   return (
      <div className="App">
         <button className="togglebtn" onClick={handleShow}>{show ? "Show Students" : "Add Student"}</button>
         {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
         {show ? <AddStudent /> : <ShowStudents />}
         {/* make sure the table is shown initially, do not show form initially */}
         {/* make sure to show either of them do not both together */}
      </div>
   );
}

export default App;
