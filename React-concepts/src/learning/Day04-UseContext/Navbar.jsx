import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "10px 20px",
        background: theme === "light" ? "#e5e5e5" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h3>Navbar</h3>
      <button onClick={toggleTheme}>
        Theme: {theme}
      </button>
    </div>
  );
}

export default Navbar;
