import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
export default function Navbar() {
   const { cart } = useContext(CartContext);
   return <div>Cart : {cart}</div>;
}
