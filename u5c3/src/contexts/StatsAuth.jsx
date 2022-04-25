import { createContext, useState } from "react";

export const StatusAuth = createContext();

export const StatusAuthProvider = ({ children }) => {
   const [terminated, setIsTerminated] = useState(0);
   const [promoted, setIsPromoted] = useState(0);
   const [newEmp, setIsNewEmp] = useState(0);
   const handleTerm = () => {
      setIsTerminated(terminated + 1);
   };
   const handlePromotion = () => {
      setIsPromoted(promoted + 1);
   };
   const handleNewEmp = () => {
      setIsNewEmp(newEmp + 1);
   };

   return (
      <StatusAuth.Provider
         value={{
            terminated,
            promoted,
            newEmp,
            handleTerm,
            handlePromotion,
            handleNewEmp,
         }}
      >
         {children}
      </StatusAuth.Provider>
   );
};
