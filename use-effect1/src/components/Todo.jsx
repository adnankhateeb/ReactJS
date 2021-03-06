import React from "react";
import { useState, useEffect } from "react";
import Counter from "./Counter";

const Todo = () => {
   const [todos, setTodos] = useState([]);
   const [text, setText] = useState("");
   const [page, setPage] = useState(1);

   useEffect(() => {
      getData();
      console.log("Mounted");
      return () => {
         console.log("Unmounted");
      };
   }, [page]);
   const getData = async () => {
      let data = await fetch(
         `http://localhost:5000/todos?_page=${page}&_limit=5`
      );
      data = await data.json();
      //  console.log("data:", data);
      setTodos(data);
   };
   return (
      <div>
         <div>
            <input
               type="text"
               onChange={(e) => {
                  setText(e.target.value);
               }}
            />
            <button
               onClick={() => {
                  console.log(text);
                  const payload = {
                     title: text,
                     status: false,
                  };
                  fetch("http://localhost:5000/todos", {
                     method: "POST",
                     headers: {
                        "content-type": "application/json",
                     },
                     body: JSON.stringify(payload),
                  }).then(() => {
                     getData();
                  });
               }}
            >
               Add Todo
            </button>
         </div>
         {todos.map((todo) => (
            <div>
               {todo.id}. {todo.title}
            </div>
         ))}
         <button
            onClick={() => {
               setPage(page + 1);
            }}
         >
            Next
         </button>
         <button
            onClick={() => {
               if (page <= 1) {
                  return;
               }
               setPage(page - 1);
            }}
         >
            Prev
         </button>
         <Counter />
      </div>
   );
};

export default Todo;
