import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";
import "./todoList.css";
export default function TodoList() {
   const [todosList, setTodosList] = useState([]);

   const getData = (todo) => {
      setTodosList([...todosList, todo]);
   };
   return (
      <div className="todoList">
         <TodoItem getData={getData} />
         <div className='items'>
            {todosList.map((e) => (
               <div className="item">{e}</div>
            ))}
         </div>
      </div>
   );
}
