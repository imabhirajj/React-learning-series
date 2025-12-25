import { AuthContextProvider } from "./learning/Day04-UseContext/AuthContext";
import { ThemeContextProvider } from "./learning/Day04-UseContext/ThemeContext";
import Navbar from "./learning/Day04-UseContext/Navbar";
import Dashboard from "./learning/Day04-UseContext/Dashboard";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Navbar />
        <Dashboard />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
