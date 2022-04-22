import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
   // const [formData, setFormData] = useState([])
   const { handleAuth } = useContext(AuthContext);
   const navigate = useNavigate();
   return (
      <div>
         <input type="text" name="email" placeholder="email" />
         <input type="text" name="password" id="" placeholder="password" />
         <button
            onClick={() => {
               //    axios
               //       .post("https://reqres.in/api/login", {
               //          email: email,
               //          password: password,
               //       })
               //       .then((res) => {
               //          handleAuth(true);
               //          <Navigate to="/home" />;
               //       })
               //       .catch(() => {
               //          console.log("invalid creds");
               //       });
               handleAuth(true);
               navigate(-2, {replace:true});
            }}
         >Login</button>
      </div>
   );
};
