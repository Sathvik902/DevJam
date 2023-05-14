import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Shared/ErrorPage";
import Home from "./Layout/Home";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import About from "./Shared/About";
import Contact from "./Shared/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
