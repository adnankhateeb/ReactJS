import { useState } from "react";

export default function InputPart({ setTodosList, todosList }) {
   const [text, setText] = useState("");

   const setTodo = (todo) => {
      setTodosList([...todosList, todo]);
   };
   return (
      <>
         <div className="topPart">
            <input
               type="text"
               placeholder="Add a to-do..."
               onChange={(e) => {
                  setText(e.target.value);
               }}
            />
            <button
               onClick={() => {
                  const data = {
                     title: text,
                     status: false,
                  };

                  setTodo(data);
               }}
            >
               +
            </button>
         </div>
      </>
   );
}
