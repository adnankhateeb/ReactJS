import { useState } from "react";
import Results from './Results';
const Completed = ({todosList}) => {
   const [showCompleted, setShowCompleted] = useState(false);

   return (
      <>
         <button
            className="showCompleted"
            onClick={() => setShowCompleted(!showCompleted)}
         >
            Show Completed Items
         </button>
         <div className="Completed">
            {showCompleted ? <Results list={todosList} /> : null}
         </div>
      </>
   );
};

export default Completed;
