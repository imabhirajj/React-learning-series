import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";

function Dashboard() {
  const { user, login, logout } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "80vh",
        background: theme === "light" ? "#f5f5f5" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Dashboard</h2>

      {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Dashboard;
