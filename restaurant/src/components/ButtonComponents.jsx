import React from "react";
import "./buttonComponent.css";
export default function ButtonComponents({
   handleFilter,
   handlePayments,
   handleSort,
}) {
   // console.log("setData:", setData)
   // console.log("data:", data);

   return (
      <>
         <div className="buttonComponent">
            <div className="filterButtons">
               <p>Filter</p>
               <button onClick={() => handleFilter(1)}>⭐</button>
               <button onClick={() => handleFilter(2)}>⭐⭐</button>
               <button onClick={() => handleFilter(3)}>⭐⭐⭐</button>
               <button onClick={() => handleFilter(4)}>⭐⭐⭐⭐</button>
            </div>
            <div className="paymentOptions">
               <p>Payment Options</p>
               <button onClick={() => handlePayments("cash")}>Cash Only</button>
               <button onClick={() => handlePayments("card")}>Card Only</button>
               <button onClick={() => handlePayments("all")}>All</button>
            </div>
            <div className="sortButtons">
               <p>Sort Items</p>
               <button onClick={() => handleSort("h2l")}>High to Low</button>
               <button onClick={() => handleSort("l2h")}>Low to High</button>
            </div>
         </div>
      </>
   );
}
