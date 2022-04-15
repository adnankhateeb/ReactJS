import { useState } from "react";
import "../App.css";

export default function Forms() {
   const [formData, setFormData] = useState({
      name: "",
      age: "",
      department: "",
      address: "",
      salary: "",
      status: "",
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   const handleSubmit = (e) => {
      //   e.preventDefault();
      fetch("http://localhost:5000/forms", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(formData),
      });
   };

   return (
      <div className="form">
         <h1>Form</h1>
         <form>
            <div className="form-group">
               <label htmlFor="exampleInputEmail1">Enter name</label>
               <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  name="name"
                  onChange={handleChange}
               />
            </div>
            <div className="form-group">
               <label htmlFor="exampleInputPassword1">Age</label>
               <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Age"
                  name="age"
                  onChange={handleChange}
               />
            </div>
            <div className="form-group">
               <label htmlFor="exampleInputEmail1">Address</label>
               <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter address"
                  name="address"
                  onChange={handleChange}
               />
            </div>
            <div className="form-group">
               <label htmlFor="exampleInputEmail1">Salary</label>
               <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Salary"
                  name="salary"
                  onChange={handleChange}
               />
            </div>

            <div className="form-check form-check-inline">
               <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="Married"
                  onChange={handleChange}
                  name="status"
               />
               <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Married
               </label>
            </div>
            <div className="form-check form-check-inline">
               <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="Unmarried"
                  onChange={handleChange}
                  name="status"
               />
               <label className="form-check-label" htmlFor="inlineCheckbox2">
                  Unmarried
               </label>
            </div>
            <select
               className="form-control"
               name="department"
               id="department"
               placeholder="Department"
               onChange={handleChange}
            >
               <option value="">Enter Department</option>
               <option value="One">Department One</option>
               <option value="Two">Department Two</option>
               <option value="Three">Department Three</option>
            </select>
            <button
               type="submit"
               className="btn btn-primary"
               onClick={handleSubmit}
            >
               Submit
            </button>
         </form>
      </div>
   );
}
