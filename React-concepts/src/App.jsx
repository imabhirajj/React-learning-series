import { AuthContextProvider } from "./learning/Day05-UseReducer/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <h1>App is rendering</h1>
    </AuthContextProvider>
  );
}

export default App;
