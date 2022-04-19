// import React from "react";
// import './button.css'

// export default function Button({ children }) {
//    return <button className='btn'>{children}</button>;
// }

import styled from "styled-components";

const Button = styled.button`
   border: none;
   background: ${(props) =>
      props.theme === "light" ? "yellow" : "rgb(50,50,50)"};
   color: white;
   padding: 10px;
   border-radius: 15px;
   width: 160px;
   margin-top: 2%;
   cursor: pointer;

   &:hover {
      background-color: #fff;
      color: rgb(50, 50, 50);
      border: 1px solid rgb(50, 50, 50);
      transition: 150ms ease-out;
   }
`;
export default Button;
