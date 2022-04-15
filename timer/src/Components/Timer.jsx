import React from "react";
import { useState, useEffect } from "react";

export default function Timer({ initial, final }) {
   const [time, setTime] = useState(initial);

   useEffect(() => {
      let id = setInterval(() => {
         setTime((e) => {
            if (e >= final) {
               clearInterval(id);
               return e;
            }
            return e + 1;
         });
      }, 1000);

      return () => {
         clearInterval(id);
      };
   }, [time]);

   return (
      <div>
         <h3>{time}</h3>
      </div>
   );
}
