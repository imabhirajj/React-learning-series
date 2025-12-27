import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Dashboard() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Dashboard</h2>

      {user ? (
        <>
          <p>Logged in as: {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Dashboard;
