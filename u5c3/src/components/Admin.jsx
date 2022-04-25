import { useContext, useState } from "react";
import { StatusAuth } from "../contexts/StatsAuth";

export const Admin = () => {
   const { handleNewEmp } = useContext(StatusAuth);
   const [err, setErr] = useState(false);

   const [formData, setFormData] = useState({
    employee_name: "",
    employee_id: "",
    title: "",
    salary: "",
    image: "",
    username: "",
    password: "",
    tasks: "",
    status: "",
    team: "",
 });

 const handleChange = (e) => {
  console.log(e.target);
  const { name, value } = e.target;

  setFormData({
     ...formData,
     [name]: value,
  });
};
   const handleSubmit = (e) => {
      e.preventDefault();
      if (
         formData.employee_id == "" ||
         formData.employee_name == "" ||
         formData.title == "" ||
         formData.image == "" ||
         formData.salary == "" ||
         formData.tasks == "" ||
         formData.status == "" ||
         formData.team == "" ||
         formData.username == "" ||
         formData.password == ""
      ) {
         setErr(true);
         return;
      }
      setErr(false);
      handleNewEmp(1);
   };
   return (
      <>
         <form className="createEmployee">
            <input
               type="text"
               placeholder="Employee Name"
               name="employee_name"
               onChange={handleChange}
            />
            <input
               type="text"
               placeholder="Employee id"
               name="employee_id"
               onChange={handleChange}
            />
            <select name="title" onChange={handleChange}>
               <option value="intern">Intern</option>
               <option value="Jr Software Developer">
                  Jr Software Developer
               </option>
               <option value="Sr Software Developer">
                  Sr Software Developer
               </option>
               <option value="Team Lead">Team Lead</option>
            </select>
            <input
               type="number"
               placeholder="Salary"
               name="salary"
               onChange={handleChange}
            />
            <input
               type="text"
               placeholder="Image"
               name="image"
               onChange={handleChange}
            />
            <input
               type="text"
               placeholder="User Name"
               name="username"
               onChange={handleChange}
            />
            <input
               type="password"
               placeholder="Password"
               name="password"
               onChange={handleChange}
            />
            <input
               type="text"
               placeholder="Enter tasks separated by commas"
               name="tasks"
               onChange={handleChange}
            />
            <select name="status" id="status" onChange={handleChange}>
               <option value="">Select Status</option>
               <option value="terminated">Terminated</option>
               <option value="working">Working</option>
            </select>
            <select name="team" id="team" onChange={handleChange}>
               <option value="">Select team</option>
               <option value="frontend">Frontend</option>
               <option value="backend">Backend</option>
               <option value="qa">QA</option>
            </select>
            <input
               className="createUser"
               type="submit"
               value={"submit"}
               onClick={handleSubmit}
            />
         </form>
         {err ? <div>Please enter all details!</div> : null}
      </>
   );
};
