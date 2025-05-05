import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import LoanCalculatorDashboard from "./components/LoanCalculatorDashboard";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoanCalculatorDashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
