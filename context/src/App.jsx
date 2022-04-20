import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Body/Card";

function App() {

   return (
      <div className="App">
         <Navbar />
         <Card />
      </div>
   );
}

export default App;
