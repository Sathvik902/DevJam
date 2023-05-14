import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Shared/ErrorPage";
import Home from "./Layout/Home";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import About from "./Shared/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
