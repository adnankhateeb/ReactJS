import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
   return (
      <div className="App">
         <Button bg="#2490FE">Primary Button</Button>
         <Button bg="transparent" border="solid">
            Default Button
         </Button>
         <Button bg="transparent" border="dashed">
            Dashed Button
         </Button>
         <Button bg="transparent" border="none">
            Text Button
         </Button>
         <Button bg="transparent" border="none" color="#2490FE">
            Link Button
         </Button>
      </div>
   );
}

export default App;
