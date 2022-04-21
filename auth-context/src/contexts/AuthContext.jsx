import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
   const [isAuth, setAuth] = useState(false);
   const [res, setRes] = useState();

   const handleAuth = (e, response) => {
      console.log("response:", response);
      if (e) {
         setRes(response.data.token);
         setAuth(true);
      } else {
          setRes(null)
         setAuth(false);
      }
   };

   return (
      <AuthContext.Provider value={{res, isAuth, handleAuth }}>
         {children}
      </AuthContext.Provider>
   );
};
