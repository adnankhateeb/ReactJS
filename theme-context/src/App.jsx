import "./App.css";
import { Navbar } from "./components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import {Forms} from './components/Forms'
function App() {
   const { theme } = useContext(ThemeContext);
   return (
      <div className="App" style={theme.main}>
         <Navbar />
         <Forms />
      </div>
   );
}

export default App;
