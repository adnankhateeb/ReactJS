import { useState, useEffect } from "react";
const Counter = () => {
   const [count, setCount] = useState(10);

   useEffect(() => {
      let interval = setInterval(() => {
         setCount((prev) => {
            if (prev < 1) {
               clearInterval(interval);
               return 0;
            }
            return prev - 1;
         });
      }, 1000);

      return () => {
          clearInterval(interval)
      }
   }, []);
   return (
      <div>
         <h3>Count: {count}</h3>
      </div>
   );
};

export default Counter;
