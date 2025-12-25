import {useState, createContext} from 'react';

export const ThemeContext = createContext();

export function ThemeContextProvider({children}) {
  const[theme,setTheme] = useState("Dark");


  function toggleTheme (){
    setTheme((prevTheme) => (prevTheme === "Dark" ? "light" : "Dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}