import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
export default function UsersList() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      axios.get("https://reqres.in/api/users").then(({ data }) => {
         return setUsers(data.data);
      });
   }, []);

   return (
      <div>
         {users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
               {user.id}. {user.first_name}
            </Link>
         ))}
      </div>
   );
}
