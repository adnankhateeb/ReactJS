import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export const Body = () => {
   const { isAuth, res } = useContext(AuthContext);

   return (
      <div>
         <h1>Status: {isAuth ? "Logged In" : "Not Logged In"}</h1>
         {res ? <h1>Token : {res}</h1> : null}
      </div>
   );
};
