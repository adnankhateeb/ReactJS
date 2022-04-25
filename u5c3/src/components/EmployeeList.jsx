import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
   const [employees, setEmployees] = useState([]);

   const getEmployees = () => {
      axios.get("http://localhost:8080/employee").then((res) => {
         // console.log(res.data)
         setEmployees(res.data);
      });
   };

   useEffect(() => {
      getEmployees();
   }, []);
   return (
      <div className="list_container">
         {/* On clicking this card anywhere, user goes to user details */}
         {employees.map((e, i) => (
            <>
               <Link to={`/employees/${e.id}`}>
                  <div className="employee_card" key={i}>
                     <img className="employee_image" src={e.image} />
                     <span className="employee_name">{e.employee_name}</span>
                     <span className="employee_title">{e.title}</span>
                  </div>
               </Link>
            </>
         ))}
      </div>
   );
};
