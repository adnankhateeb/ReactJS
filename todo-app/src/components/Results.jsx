import React from "react";
import './Results.css'
export default function Results({ list }) {
   return (
      <>
         {list.map((item) => {
            {
               if (item.status === true) {
                  return <div className='item2'><p>{item.title}</p></div>;
               }
            }
         })}
      </>
   );
}
