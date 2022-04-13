import React from "react";
import { useState } from "react";
export default function TodoItem({ setTodosList, todosList }) {
   return (
      <>
         <div>
            {todosList.map((todo, i) => (
               <div className="item">
                  <input
                     type="checkbox"
                     onClick={() => {
                        todo.status = !todo.status;
                        setTodosList([...todosList]);
                     }}
                  />
                  <p
                     className={todo.status === true ? "lineThrough" : "simple"}
                  >
                     {todo.title}
                  </p>

                  <button
                     className="removeButton"
                     onClick={() => {
                        todosList.splice(i, 1);
                        setTodosList([...todosList]);
                     }}
                  >
                     -
                  </button>
               </div>
            ))}
         </div>
      </>
   );
}
