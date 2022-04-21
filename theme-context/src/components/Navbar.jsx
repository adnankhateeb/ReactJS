import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const Navbar = () => {
   const { theme, toggleTheme } = useContext(ThemeContext);
   console.log("theme:", theme)

   return (
      <div>
         <button style={theme.button} onClick={toggleTheme}>
            Switch to {theme.curr ==="dark" ? "light" : "dark"} mode
         </button>
      </div>
   );
};
