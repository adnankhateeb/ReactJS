import React from "react";
import {
   AiFillTwitterCircle,
   AiFillFacebook,
   AiOutlineInstagram,
} from "react-icons/ai";
import "./styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
   const footer = [
      { title: "FAQ", to: "/faq" },
      { title: "Contact Us", to: "/contact" },
   ];
   return (
      <div className="footer">
         <p>
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other terms apply.
         </p>
         {footer.map((e, i) => (
            <Link to={e.to} key={i} style={{ marginRight: "7px" }}>
               {e.title}
            </Link>
         ))}
         <AiFillTwitterCircle />
         <AiFillFacebook />
         <AiOutlineInstagram />
      </div>
   );
}
