import React from "react";

export default function ShowRestaurants({ data }) {
   //   console.log("data:", data)
   return (
      <div className="restaurantMain">
         {data.map((e) => {
            return (
               <div className="restaurantCard">
                  <div className="up">
                     <img src={e.image} className="cardImage" alt="" />
                     <div className="detailsDishes">
                        <h4 className="name">{e.name}</h4>
                        <p className="grayFont">{e.cuisine}</p>
                        <p className="grayFont">Cost ₹{e.cost} for one</p>
                        <p className="cost">Min ₹{e.minPrice}</p>
                        <p>{e.paymentMethods}</p>
                     </div>
                     <div className="ratings">
                        <p className="green whiteFont">{e.rating}</p>
                        <p className="grayFont">{e.votes} votes</p>{" "}
                        <p className=" grayFont">{e.reviews} reviews</p>
                     </div>
                  </div>
                  <div className="buttonDish">
                     <button>Order Now</button>
                  </div>
               </div>
            );
         })}
      </div>
   );
}
