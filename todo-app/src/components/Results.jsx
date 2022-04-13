import React from "react";

export default function Results({ list }) {
   console.log(list);
   return (
      <>
         {list.map((item) => {
            {
               if (item.status === true) {
                  return <h3>{item.title}</h3>;
               }
            }
         })}
      </>
   );
}
