import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Store() {
   const [store, setStore] = useState([]);

   const getData = async () => {
      let data = await fetch("http://localhost:5000/store");
      data = await data.json();
      setStore([...data]);
   };

   useEffect(() => {
      getData();
   }, []);
   return (
      <div>
         <h1>Store. The best way to buy the products you love.</h1>
         <div className="store">
            {store.map((product) => {
               return (
                  <div className="product">
                     <Link key={product.id} to={`/store/${product.id}`}>
                        <img src={product.image} alt="" />
                        <h4>{product.model}</h4>
                     </Link>
                     <h4>{product.price}</h4>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
