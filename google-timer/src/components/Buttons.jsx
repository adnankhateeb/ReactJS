import React, {useState} from "react";

export default function Buttons({ timerRef, setSec, setMin, startTimer }) {
    const [stop, setStop] = useState(false);

   return (
      <div className="buttons">
         {" "}
         {stop ? (
            <button
               onClick={() => {
                  setStop(false);
                  clearInterval(timerRef.current);
               }}
            >
               Stop
            </button>
         ) : (
            <button
               onClick={() => {
                  setStop(true);
                  startTimer();
               }}
            >
               Start
            </button>
         )}
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
