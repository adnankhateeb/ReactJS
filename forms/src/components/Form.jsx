import React from "react";
import { useState } from "react";

export default function Form() {
   const [formData, setFormData] = useState({
      username: "",
      age: "",
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      fetch("http://localhost:5000/users", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(formData),
      });
   };
   return (
      <div>
         <form>
            <input
               type="text"
               name="username"
               placeholder="Enter username"
               onChange={handleChange}
            />
            <input
               type="age"
               name="age"
               placeholder="Enter age"
               onChange={handleChange}
            />
            <input type="submit" onClick={handleSubmit} />
         </form>
      </div>
   );
}
