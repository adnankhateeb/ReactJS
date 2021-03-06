import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Redux/ProductRed/actions";

export const NewOrder = () => {
   // Get data of only this user. store it in redux
   // GET /orders?owner_name=john will give you all order of user john
   //  on submit click create a new order, new order has status `Not Accepted`
   const dispatch = useDispatch();
   const store = useSelector((store) => store);
   const [data, setData] = useState([]);

   const getOrders = () => {
      axios
         .get(`http://localhost:8080/orders?owner_name=${store.username}`)
         .then((fetched) => {
            // console.log(fetched.data);
            setData(fetched.data);
         });
   };

   const [formData, setFormData] = useState({
      problem: "",
      brand: "",
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   const handleSubmit = (e) => {
      // e.preventDefault();
      dispatch(addProduct(formData));
      axios
         .post("http://localhost:8080/orders", {
            problem: formData.problem,
            owner_name: store.username,
            brand: formData.brand,
            status: "Not Accepted",
         })
         .then(getOrders());
   };

   useEffect(() => {
      getOrders();
   }, []);

   return (
      <div>
         <div className="form">
            <input
               className="new-problem"
               type="text"
               name="problem"
               placeholder="Enter problem"
               onChange={handleChange}
            />
            {/* This input is readonly, it's coming from redux */}
            <input
               className="owner-name"
               type="text"
               name="owner_name"
               placeholder="yourname"
               value={store.username}
               readOnly
            />
            <input
               className="brand"
               type="text"
               name="brand"
               placeholder="Enter brand name"
               onChange={handleChange}
            />
            {/* Create new problem, show it in below form immediately */}
            <button className="submit" onClick={handleSubmit}>
               submit
            </button>
         </div>

         <div className="pastOrders">
            {/* this button filters the data below. */}
            {/* it's just a toggle of redux state something like `showUnfinished`  */}
            <button className="filter">
               {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
            </button>

            {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
            {data.map((e) => {
               return (
                  <div className="past-orders">
                     <span className="id">{e.id}</span>.{" "}
                     <span className="problem">{e.problem}</span>{" "}
                     <span className="cost">
                        {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
                     </span>
                     <p className="status">Status: {e.status}</p>
                     <hr />
                  </div>
               );
            })}
         </div>
      </div>
   );
};
