import "./App.css";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import Loader from "./components/Loader";
import NotFound from "./ErrorBoundary/NotFound";

const ExchangeRate = lazy(() => import("./components/ExchangeRate"));
const LoanCalculatorDashboard = lazy(() =>
  import("./components/LoanCalculatorDashboard")
);

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <LoanCalculatorDashboard />,
      },
      {
        path: "/exchange-rate",
        element: <ExchangeRate />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
