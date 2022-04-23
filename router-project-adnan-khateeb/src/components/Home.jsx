import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
   return (
      <div>
         <h1>iPhone 12 Pro</h1>
         <h3>Oh. So. Pro.</h3>
         <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13pro-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1644989935267"
            alt=""
            className="product"
         />
         <br />
         <Link to="/store">
            <button className="toStore">Visit Store</button>
         </Link>
      </div>
   );
}
