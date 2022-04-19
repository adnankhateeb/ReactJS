// import React from "react";
// import './button.css'

// export default function Button({ children }) {
//    return <button className='btn'>{children}</button>;
// }

import styled from "styled-components";

const Button = styled.button`
   border: 1px
      ${(props) => {
         return props.border;
      }}
      #000;
   background: ${(props) => {
      return props.bg;
   }};
   font-size: 12px;
   color: ${(props) => {
      if (!props.color) {
         return props.bg === "transparent" ? "black" : "white";
      } else{
         return props.color;
      }
   }};
   padding: 10px;
   /* border-radius: 4px; */
   /* width: 160px; */
   margin-top: 2%;
   cursor: pointer;
   margin-left: 1%;

   /* &:hover {
      background-color: #fff;
      color: rgb(50, 50, 50);
      border: 1px solid rgb(50, 50, 50);
      transition: 150ms ease-out;
   } */
`;
export default Button;
