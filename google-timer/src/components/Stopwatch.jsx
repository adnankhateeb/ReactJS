import React, { useRef, useState } from "react";

export default function Stopwatch() {
   const [sec, setSec] = useState(0);
   const [ms, setMs] = useState(0);
   const [stop, setStop] = useState(false);

   const stopWatchRef = useRef(null);

   const startStopwatch = () => {
      stopWatchRef.current = setInterval(() => {
         setMs((prev) => {
            if (prev === 98) {
               setSec((p) => p + 1);
               setMs(0);
            }
            return prev + 1;
         });
      }, 10);
   };
   return (
      <div className="buttons">
         <div>
            {sec}s {ms < 10 ? "0" : null}
            {ms}
         </div>
         {stop ? (
            <button
               onClick={() => {
                  setStop(false);
                  clearInterval(stopWatchRef.current);
               }}
            >
               Stop
            </button>
         ) : (
            <button
               onClick={() => {
                  setStop(true);
                  startStopwatch();
               }}
            >
               Start
            </button>
         )}
         <button onClick={() => {
               setStop(false);
               setMs(0);
               setSec(0);
               clearInterval(stopWatchRef.current);
            }}>Reset</button>
      </div>
   );
}
