import React from "react";
import { useState } from 'react';

export default function Timer({ initial, final }) {
   const [time, setTime] = useState(initial);

   useEffect(() => {
       setTimeout(() => {
            setTime()
       },1000)
       return () => {
           cleanup
       };
   }, [time]);

   return (
      <div>
         <h3>{time}</h3>
      </div>
   );
}
