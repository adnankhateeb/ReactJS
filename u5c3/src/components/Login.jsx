import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
   //  use reqres to log user in.
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      username: "",
      password: "",
   });

   const { isAuth, handleAuth } = useContext(AuthContext);
   const handleSubmit = (e) => {
      e.preventDefault();
      axios
         .post("https://reqres.in/api/login", {
            email: formData.username,
            password: formData.password,
         })
         .then(() => handleAuth(true))
         .catch(() => handleAuth(false));
      navigate(-1);
   };

   const handleChange = (e) => {
      console.log(e.target.name);
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   return (
      <form className="loginform">
         <input
            name="username"
            type="text"
            placeholder="Enter username"
            className="login_username"
            onChange={handleChange}
         />
         <input
            name="password"
            type="text"
            placeholder="Enter password"
            className="login_password"
            onChange={handleChange}
         />
         <input
            type="submit"
            onClick={handleSubmit}
            value="SIGN IN"
            className="login_submit"
         />
      </form>
   );
};
