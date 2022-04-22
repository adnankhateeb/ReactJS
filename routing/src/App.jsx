import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import { PrivateComponent } from "./components/PrivateComponent";
import { Login } from "./components/Login";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/users" element={<UsersList />}></Route>
            <Route
               path="/users/:id"
               element={
                  <PrivateComponent>
                     <UserDetails />
                  </PrivateComponent>
               }
            ></Route>
            <Route path="/login" element={<Login />} />
         </Routes>
      </div>
   );
}

export default App;
