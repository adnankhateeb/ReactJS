import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Card() {
   const { handleChange } = useContext(CartContext);

   return (
      <div>
         <div
            style={{
               background: "teal",
               width: "200px",
               height: "200px",
               padding: "10px",
            }}
         >
            <button
               onClick={() => {
                  handleChange(1);
               }}
            >
               Add To Cart
            </button>
         </div>
      </div>
   );
}
