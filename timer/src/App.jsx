import "./App.css";
import Timer from "./Components/Timer";

function App() {
   const initial = 2;
   const final = 5;
   return (
      <div className="App">
         <Timer initial={initial} final={final} />
      </div>
   );
}

export default App;
