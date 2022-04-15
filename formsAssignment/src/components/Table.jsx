import React from "react";
import { useState, useEffect } from "react";
import "../App.css";

const Table = () => {
   const [formsData, setFormsData] = useState([]);

   const getFormsData = async () => {
      let data = await fetch("http://localhost:5000/forms");
      data = await data.json();
      setFormsData([...formsData, ...data]);
   };

   useEffect(() => {
      getFormsData();
   }, [setFormsData]);
   return (
      <div className="table">
         <table className="table">
            <thead className="thead-dark">
               <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Address</th>
                  <th scope="col">Department</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Marital Status</th>
               </tr>
            </thead>
            <tbody>
               {formsData.map((e) => {
                  return (
                     <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.address}</td>
                        <td>{e.department}</td>
                        <td>{e.salary}</td>
                        <td>{e.status}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
