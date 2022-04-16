import React from "react";

export default function Form() {
   return (
      <div>
         <form>
            <input type="text" name="name" placeholder="Enter Name" />
            <input type="text" name="cuisine" placeholder="Cuisine" />
            <input type="text" name="cost" placeholder="Cost" />
            <input type="text" name="minPrice" placeholder="Minimum Price" />
            <input
               type="text"
               name="paymentMethods"
               placeholder="Payment Methods"
            />
            <input type="text" name="rating" placeholder="Ratings" />
            <input type="text" name="votes" placeholder="Votes" />
            <input type="text" name="reviews" placeholder="Reviews" />
            <input type="text" name="image" placeholder="Image URL" />
            <input type="submit" />
         </form>
      </div>
   );
}
