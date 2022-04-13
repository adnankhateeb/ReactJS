import { useState } from "react";
import "./todo.css";
import Results from "./Results";

export default function Todo() {
   const [text, setText] = useState("");
   const [todosList, setTodosList] = useState([]);

   const setTodo = (todo) => {
      setTodosList([...todosList, todo]);
   };

   const [showCompleted, setShowCompleted] = useState(false);

   return (
      <div className="entire">
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
                  // console.log(todosList);
               }}
            >
               +
            </button>
         </div>
         {/* <TodoItem /> */}
         <div>
            {todosList.map((todo) => (
               <div className="flex">
                  <h3
                     className={todo.status === true ? "lineThrough" : "simple"}
                  >
                     {todo.title}
                  </h3>
                  <input
                     type="checkbox"
                     onClick={() => {
                        todo.status = !todo.status;
                        setTodosList([...todosList]);
                     }}
                  />
               </div>
            ))}
         </div>
         <div>
            <button onClick={() => setShowCompleted(!showCompleted)}>
               Show completed items
            </button>
            <div>{showCompleted ? <Results list={todosList} /> : null}</div>
         </div>
      </div>
   );
}
