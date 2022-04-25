import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StatusAuth } from "../contexts/StatsAuth";

export const EmployeeDetails = () => {
   const { id } = useParams();

   const [details, setDetails] = useState([]);

   const { handlePromotion, handleTerm } = useContext(StatusAuth);

   const handlePromote = () => {
      handlePromotion(1);
   };

   const handleFire = () => {
      handleTerm(1);
   };

   useEffect(() => {
      axios.get(`http://localhost:8080/employee/${id}`).then((res) => {
         setDetails(res.data);
         console.log(details.tasks);
      });
   }, []);
   return (
      <div className="user_details">
         <img className="user_image" src={details.image} />
         <h4 className="user_name">{details.employee_name}</h4>
         <span className="user_salary">${details.salary}</span>
         <span className="tasks">
            <li className="task">{details.tasks}</li>;
         </span>
         Status: <b className="status">{details.status}</b>
         Title: <b className="title">{details.title}</b>
         {/* Show this button only if user is not already terminated (users status is working) */}
         {details.status !== "terminated" ? (
            <button className="fire" onClick={handleFire}>
               Fire Employee
            </button>
         ) : null}
         {/* Show this button only if user is not already team lead or terminated */}
         {details.title !== "Team Lead" ? (
            <button className="promote" onClick={handlePromote}>
               promote
            </button>
         ) : null}
      </div>
   );
};
