import React from "react";
import "./styles/navbar.css";
import Logo from "../public/apple-xxl.png";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Navbar() {
   const nav = [
      { title: "Store", to: "/store" },
      { title: "Mac", to: "/" },
      { title: "iPad", to: "/" },
      { title: "iPhone", to: "/" },
      { title: "Watch", to: "/" },
      { title: "AirPods", to: "/" },
      { title: "TV & Home", to: "/" },
      { title: "About Us", to: "/aboutus" },
      { title: "FAQ", to: "/faq" },
      { title: "Contact Us", to: "/contact" },
   ];
   return (
      <div className="navbar">
         <div className="innerNav">
           <Link to="/"> <img className="logo" src={Logo} alt="" /></Link>
            {nav.map((e,i) => {
                return <Link key={i} to={e.to}>{e.title}</Link>
            })}
            <div className="icon">
               {" "}
               <MdOutlineShoppingBag />
            </div>
         </div>
      </div>
   );
}
