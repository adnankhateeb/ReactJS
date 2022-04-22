import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
   const nav = [
      { title: "Home", to: "/" },
      { title: "About", to: "/about" },
      { title: "Users", to: "/users" },
   ];
   const { isAuth, handleAuth } = useContext(AuthContext);
   return (
      <div>
         {nav.map((e, i) => (
            <Link key={i} to={e.to}>
               {e.title}
            </Link>
         ))}
         {isAuth ? (
            <button
               onClick={() => {
                  handleAuth(false);
               }}
            >
               Logout
            </button>
         ) : null}
      </div>
   );
}
