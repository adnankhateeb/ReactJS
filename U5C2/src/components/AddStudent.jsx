import { useState, useEffect } from "react";

export const AddStudent = () => {
   const [formData, setFormData] = useState({
      first_name: null,
      last_name: null,
      email: null,
      gender: null,
      age: 0,
      tenth_score: -1,
      twelth_score: -1,
      preferred_branch: null,
   });

   const [errorMessage, setErrorMessage] = useState(null);
   const [showError, setShowError] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData.first_name);
      if (formData.first_name === null || "") {
         setShowError(true);
         setErrorMessage("First name can-not be empty");
         return;
      } else if (formData.gender === null || "") {
         setShowError(true);
         setErrorMessage("Gender can-not be empty");
         return;
      } else if (formData.last_name === null || "") {
         setShowError(true);
         setErrorMessage("Last name can-not be empty");
         return;
      } else if (formData.age == 0 || "") {
         setShowError(true);
         setErrorMessage("Age can not be empty");
         return;
      } else if (formData.age > 100) {
         setShowError(true);
         setErrorMessage("Age must be less than 100");
         return;
      } else if ((formData.preferred_branch = null || "")) {
         setShowError(true);
         setErrorMessage("Preferred branch can not be empty");
         return;
      } else if (formData.tenth_score === -1 || "") {
         setShowError(true);
         setErrorMessage("Tenth Score can not be empty");
         return;
      } else if (formData.twelth_score === -1 || "") {
         setShowError(true);
         setErrorMessage("Twelth score can't be empty");
         return;
      } else {
         setShowError(false);
      }
      fetch("http://localhost:8080/students", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(formData),
      });
   };

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   return (
      <form className="addstudent">
         <div>
            Firstname:{" "}
            <input
               type="text"
               name="first_name"
               className="first_name"
               placeholder="enter first name"
               onChange={handleChange}
            />
         </div>
         <div>
            {" "}
            Last Name:
            <input
               type="text"
               name="last_name"
               className="last_name"
               placeholder="enter last name"
               onChange={handleChange}
            />
         </div>
         <div>
            {" "}
            Email:
            <input
               type="email"
               name="email"
               className="email"
               placeholder="enter email"
               onChange={handleChange}
            />
         </div>
         <div>
            Gender:{" "}
            {/* NOTE: radio boxes only work when they have same `name`. */}
            <div>
               Male
               <input
                  name="gender"
                  className="male"
                  type="radio"
                  value={"male"}
                  onChange={handleChange}
               />{" "}
               Female{" "}
               <input
                  name="gender"
                  className="female"
                  type="radio"
                  value={"female"}
                  onChange={handleChange}
               />
            </div>
         </div>
         <div>
            Age{" "}
            <input
               type="number"
               name="age"
               className="age"
               placeholder="enter age"
               onChange={handleChange}
            />
         </div>
         <div>
            Tenth Score:{" "}
            <input
               type="number"
               name="tenth_score"
               className="tenth_score"
               placeholder="enter 10th score"
               onChange={handleChange}
            />{" "}
         </div>
         <div>
            Twelth Score:{" "}
            <input
               type="number"
               name="twelth_score"
               className="twelth_score"
               placeholder="enter 12th score"
               onChange={handleChange}
            />{" "}
         </div>
         <div>
            <select
               // value={" "} // select dropdown needs both value and onChange attributes
               name="preferred_branch"
               className="preferred_branch"
               onChange={handleChange}
            >
               <option value="">Select</option>
               <option value="law">law</option>
               <option value="commerce">commerce</option>
               <option value="science">science</option>
               <option value="sports">sports</option>
               <option value="arts">arts</option>
               <option value="acting">acting</option>
            </select>
         </div>
         <input
            className="submit"
            type="submit"
            value="Submit"
            onClick={handleSubmit}
         />
         {showError ? <div className="error">{errorMessage}</div> : null}
         {/* // show this div with proper error before submitting form, if there's
         anything not provided // eg: first name missing, age cannot be greater
         than 100 etc */}
      </form>
   );
};
