import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainHeader from "./Shared/components/Navigation/Header";
import ErrorPage from "./Shared/components/Navigation/ErrorPage";

import Home from "./Layout/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
    children: [{ path: "/login", element: <MainHeader /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
