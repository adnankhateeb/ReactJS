import { createContext, useState } from "react";

export const ThemeContext = createContext();
import { Styles } from "../components/styles";

export const ThemeContextProvider = ({ children }) => {
   const [theme, setTheme] = useState(Styles.dark);

   const toggleTheme = () => {
      theme === Styles.dark ? setTheme(Styles.light) : setTheme(Styles.dark);
   };
   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};
