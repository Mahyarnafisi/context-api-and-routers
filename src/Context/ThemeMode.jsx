import { createContext, useState, useContext } from "react";
const ThemeContext = createContext("");
function ThemeMode({ children }) {
  const [theme, setTheme] = useState(true);
  const darkTheme = {
    backgroundColor: "#333333",
    color: "white",
  };
  const lightTheme = {
    backgroundColor: "#f1f1f1",
    color: "#444444",
  };

  const ModeToggle = theme ? lightTheme : darkTheme;

  return <ThemeContext.Provider value={{ theme, setTheme, ModeToggle }}>{children}</ThemeContext.Provider>;
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) alert("something went wrong");

  return context;
}
export { ThemeMode, useTheme };
