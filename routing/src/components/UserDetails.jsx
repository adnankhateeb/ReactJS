import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
   const { id } = useParams();
   const [data, setData] = useState([]);
    //   console.log("data:", data)

   useEffect(() => {
      axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
         setData(data.data);
        //  console.log("data:", data.data);
      });
   }, []);
   return (
      <div>
         <div>
            <div><img src={data.avatar}></img></div>
            <div>Name : {data.first_name} {data.last_name}</div>
            <div>Email : {data.email}</div>
         </div>
      </div>
   );
};

export default UserDetails;
