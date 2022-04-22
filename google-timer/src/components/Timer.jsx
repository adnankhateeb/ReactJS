import { useEffect, useState } from "react";

export const Timer = () => {
   const [sec, setSec] = useState(5);
   const [ms, setMs] = useState(100);
   const [min, setMin] = useState(5);

   useEffect(() => {
      let secInterval = setInterval(() => {
         setSec((e) => {
            if (e === 0) {
               minInterval;
               clearInterval(secInterval);
               clearInterval(msInterval);
               return e;
            }
            setMs(100);
            msInterval;
            return e - 1;
         });
      }, 1000);

      let msInterval = setInterval(() => {
         setMs((e) => {
            if (e === 0) {
               clearInterval(msInterval);
               return e;
            }
            return e - 1;
         });
      }, 10);

      let minInterval = setInterval(() => {
         setMin((e) => {
            if (e === 0) {
               clearInterval(minInterval);
               return e;
            }
            setSec(59);
            secInterval;
            return e - 1;
         });
      }, 1000 * 60);

      return () => {
         clearInterval(secInterval);
         clearInterval(msInterval);
         clearInterval(minInterval);
      };
   }, [sec]);

   return (
      <div>
         {min}:{sec}:{ms < 10 ? "0" : null}
         {ms}
      </div>
   );
};
