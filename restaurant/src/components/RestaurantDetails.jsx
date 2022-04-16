import React from "react";
import { useState, useEffect } from "react";
import ButtonComponents from "./ButtonComponents";
import ShowRestaurants from "./ShowRestaurants";
export default function RestaurantDetails() {
   const [data, setData] = useState([]);

   const setDataToShow = async () => {
      let fetchedData = await fetchData();
      setData([...fetchedData, ...data]);
   };

   const fetchData = async () => {
      let backendData = await fetch("http://localhost:8080/restaurants");
      backendData = await backendData.json();
      return backendData;
   };

   useEffect(() => {
      setDataToShow();
   }, [setData]);

   const handleFilter = async (num) => {
      let fetchedData = await fetchData();
      let ratingFiltered = fetchedData.filter((e) => {
         return e.rating >= num;
      });

      setData(ratingFiltered);
   };

   const handlePayments = async (type) => {
      let fetchedData = await fetchData();
      if (type === "cash") {
         let paymentFiltered = fetchedData.filter((e) => {
            return (e.paymentMethods = "Accepts COD payments only");
         });
         setData(paymentFiltered);
      } else if (type === "card") {
         let paymentFiltered = fetchedData.filter((e) => {
            return (e.paymentMethods = "Accepts card payments only");
         });
         setData(paymentFiltered);
      } else {
         setData(fetchedData);
      }
   };

   const handleSort = async (order) => {
      let fetchedData = await fetchData();
      if (order === "l2h") {
         fetchedData = fetchedData.sort((a, b) => {
            return a.cost - b.cost;
         });
         setData(fetchedData);
      } else if (order === "h2l") {
         fetchedData = fetchedData.sort((a, b) => {
            return b.cost - a.cost;
         });
         setData(fetchedData);
      }
   };

   return (
      <div>
         <ButtonComponents
            key={"buttons"}
            handleFilter={handleFilter}
            handleSort={handleSort}
            handlePayments={handlePayments}
         />
         <ShowRestaurants key={"data"} data={data} />
      </div>
   );
}
