import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
   const { id } = useParams();
   const [data, setData] = useState([]);

   useEffect(() => {
      axios.get(`http://localhost:5000/store/${id}`).then(({ data }) => {
         setData(data);
         console.log("data:", data);
      });
   }, []);
   return (
      <div className='productDetails'>
         <div>
            <img src={data.image} className="product"></img>
         </div>
         <h3>{data.model} </h3>
         <h5 style={{ color: "" }}>Price : {data.price}</h5>
         <p style={{ fontSize: "18px", color: "gray" }}>{data.details}</p>
         <button className="cartBtn">Buy</button>
         
      </div>
   );
};

export default ProductDetails;
