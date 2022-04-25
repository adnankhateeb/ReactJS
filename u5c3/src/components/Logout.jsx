import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Logout = () => {
   // log user out. it's just an inmemory value in context api

   const { handleAuth } = useContext(AuthContext);
   const logout = () => {
      handleAuth(false);
      return <Navigate to="/" />;
   };
   useEffect(() => {
      logout();
   }, []);
   return (
      <div>
         <h1>Logged out!</h1>
      </div>
   );
};
