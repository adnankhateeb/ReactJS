import React, { useState } from "react";
import "./todoItem.css";
const TodoInput = ({ getData }) => {
   const [text, setText] = useState("");
   return (
      <div className="todoItem">
         <input
            onChange={(e) => {
               setText(e.target.value);
            }}
            type="text"
            placeholder="Enter text here"
         />
         <button
            onClick={() => {
               getData(text);
            }}
         >
            +
         </button>
      </div>
   );
};

export default TodoInput;
