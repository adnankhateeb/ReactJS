import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { StatusAuthProvider } from "./contexts/StatsAuth";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <StatusAuthProvider>
         <AuthContextProvider>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </AuthContextProvider>
      </StatusAuthProvider>
   </React.StrictMode>
);
