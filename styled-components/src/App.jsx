import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {

   return (
      <div className="App">
       
         <Button theme={theme}>Allo</Button>
         <Button
            onClick={() => {
               setTheme(theme === "light" ? "dark" : "light");
            }}
         >
            Change Theme
         </Button>
      </div>
   );
}

export default App;
