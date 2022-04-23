import React from "react";

export default function Buttons({ timerRef, setSec, setMin, startTimer }) {
   return (
      <div className="buttons">
         {" "}
         <button
            onClick={() => {
               console.log("clicked");
               clearInterval(timerRef.current);
            }}
         >
            Stop
         </button>
         <button
            onClick={() => {
               startTimer();
            }}
         >
            Start
         </button>
         <button
            onClick={() => {
               setMin(5);
               setSec(0);
               clearInterval(timerRef.current);
            }}
         >
            Reset
         </button>
      </div>
   );
}
