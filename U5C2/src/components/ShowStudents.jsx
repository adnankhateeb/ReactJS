import { useEffect, useState } from "react";

export const ShowStudents = () => {
   const [data, setData] = useState([]);

   const getData = async () => {
      let fetchedData = await fetch("http://localhost:8080/students");
      fetchedData = await fetchedData.json();
      return fetchedData;
   };

   const showData = async () => {
      let fetchedData = await getData();
      setData(fetchedData);
   };
   useEffect(() => {
      showData();
   }, []);

   const handleSort = async () => {
      let type = document.querySelector(".sortby").value;
      let order = document.querySelector(".sortorder").value;
      // console.log(type, order);
      let fetchedData = await getData();
      if (type === "first_name" || type === "gender") {
         if (order === "asc") {
            fetchedData.sort((a,b) => {
              return a[type].localeCompare(b[type])
            });
         } else {
            fetchedData.sort((a,b) => {
              return b[type].localeCompare(a[type])
            });
         }
         setData(fetchedData);
      } else {
         if (order === "asc") {
            let sorted = fetchedData.sort((a, b) => {
               return a[type] - b[type];
            });
            setData(sorted);
         } else if (order === "desc") {
            let sorted = fetchedData.sort((a, b) => {
               return b[type] - a[type];
            });
            setData(sorted);
         }
      }
      // console.log("data:", data);
   };
   return (
      <div className='ShowStudents'>
         <div className="controls">
            <div>
               Sort By:{" "}
               <select
                  // select dropdown needs both value and onChange
                  className="sortby"
               >
                  <option value="first_name">First Name</option>
                  <option value="gender">Gender</option>
                  <option value="age">Age</option>
                  <option value="tenth_score">10th Score</option>
                  <option value="twelth_score">12th Score</option>
               </select>
            </div>
            <div>
               Order:
               <select
                  // select dropdown needs both value and onChange
                  className="sortorder"
               >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
               </select>
            </div>
            <button className="sort" onClick={handleSort}>
               sort
            </button>
         </div>
         <table className="table">
            <thead>
               <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>10th Score</th>
                  <th>12th Score</th>
                  <th>Branch</th>
               </tr>
            </thead>
            <tbody className="tbody">
               {/* populate all rows like below: */}
               {data.map((e) => {
                  return (
                     <tr className="row">
                        <td className="first_name">{e.first_name}</td>
                        <td className="last_name">{e.last_name}</td>
                        <td className="email">{e.email}</td>
                        <td className="gender">{e.gender}</td>
                        <td className="age">{e.age}</td>
                        <td className="tenth_score">{e.tenth_score}</td>
                        <td className="twelth_score">{e.twelth_score}</td>
                        <td className="preferred_branch">
                           {e.preferred_branch}
                        </td>
                     </tr>
                  );
               })}
               <tr className="row"></tr>
            </tbody>
         </table>
      </div>
   );
};
