import Navbar from "./components/Day07/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Home Page</h1>
    },
    {
      path: "/about",
      element: <h1>About Page</h1>
    },
    {
      path: "/contact",
      element: <h1>Contact Page</h1>
    }
  ]);

  return (
    <div className="app">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
