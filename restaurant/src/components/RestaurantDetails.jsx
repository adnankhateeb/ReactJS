import React from "react";
import { useState, useEffect } from "react";
import ShowRestaurants from './ShowRestaurants';
export default function RestaurantDetails() {
   const [data, setData] = useState([]);

   const getData = async () => {
      let backendData = await fetch("http://localhost:8080/restaurants");
      backendData = await backendData.json();
    //   console.log("backendData:", backendData);
      setData([...backendData, ...data]);
   };

   useEffect(() => {
      getData();
   }, [setData]);
   return (
      <div>
         <ShowRestaurants data = {data}/>
      </div>
   );
}
