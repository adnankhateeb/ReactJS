import { useState } from "react";
import "./todo.css";
import Completed from "./Completed";
import TodoItem from "./TodoItem";
import InputPart from "./InputPart";

export default function Todo() {
   const [todosList, setTodosList] = useState([]);

   return (
      <div className="entire">
         <InputPart setTodosList={setTodosList} todosList={todosList} />
         <TodoItem setTodosList={setTodosList} todosList={todosList} />

         <div>
            <Completed todosList={todosList} />
         </div>
      </div>
   );
}
