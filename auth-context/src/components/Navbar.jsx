import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   const { isAuth, handleAuth } = useContext(AuthContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      //   console.log(e);
      axios
         .post("https://reqres.in/api/login", {
            email: formData.email,
            password: formData.password,
         })
         .then((response) => {
            //  console.log(response);
            handleAuth(true, response);
         })
         .catch(() => {
            handleAuth(false, response);
         });
   };

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   return (
      <div>
         <form>
            {isAuth ? null : (
               <>
                  <input
                     type="text"
                     name="email"
                     placeholder="Enter email..."
                     onChange={handleChange}
                  />
                  <input
                     type="password"
                     name="password"
                     placeholder="Enter password"
                     onChange={handleChange}
                  />
               </>
            )}
            {isAuth ? (
               <input
                  type="submit"
                  value="Logout"
                  onClick={(e) => {
                      e.preventDefault();
                     handleAuth(false);
                  }}
               />
            ) : (
               <input type="submit" value="Login" onClick={handleSubmit} />
            )}
         </form>
      </div>
   );
};
