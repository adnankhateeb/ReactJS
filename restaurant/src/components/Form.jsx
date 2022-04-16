import React from "react";
import { useState } from "react";
export default function Form() {
   const [formData, setFormData] = useState({
      name: "",
      cuisine: "",
      cost: "",
      minPrice: "",
      paymentMethods: "",
      rating: "",
      votes: "",
      reviews: "",
      image: "",
   });
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };
   const handleSubmit = () => {
      fetch("http://localhost:8080/restaurants", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(formData),
      });
   };
   return (
      <div>
         <form className="form">
            <input
               type="text"
               name="name"
               placeholder="Enter Name"
               className="smallInput"
               onChange={handleChange}
            />
            <input
               type="text"
               name="cuisine"
               placeholder="Cuisine"
               className="smallInput"
               onChange={handleChange}
            />
            <input
               type="text"
               name="cost"
               placeholder="Cost"
               className="smallInput"
               onChange={handleChange}
            />
            <input
               type="text"
               name="minPrice"
               placeholder="Minimum Price"
               className="smallInput"
               onChange={handleChange}
            />
            <input
               type="text"
               name="paymentMethods"
               placeholder="Payment Methods"
               className="smallInput"
               onChange={handleChange}
            />
            <input
               type="text"
               name="rating"
               placeholder="Ratings"
               className="smallInput"
               onChange={handleChange}
            />
            <input
               type="text"
               name="votes"
               placeholder="Votes"
               className="smallInput"
               onChange={handleChange}
            />
            <input
               type="text"
               name="reviews"
               placeholder="Reviews"
               className="smallInput"
               onChange={handleChange}
            />
            <input
               type="text"
               name="image"
               placeholder="Image URL"
               className="smallInput"
               onChange={handleChange}
            />
            <input
               type="submit"
               className="smallInput submit"
               onClick={handleSubmit}
            />
         </form>
      </div>
   );
}
