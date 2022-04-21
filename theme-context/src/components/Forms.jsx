import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const Forms = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <div>
         <form style={theme.form}>
            Name
            <input type="text" style={theme.form.input} />
            Email
            <input type="text" style={theme.form.input} />
            Phone Number
            <input type="text" style={theme.form.input}/>
            <input type="submit" style={theme.button} onClick={(e) => e.preventDefault()} />
         </form>
      </div>
   );
};
