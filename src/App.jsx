import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import MealDetailsPage from "./Pages/mealDetails/MealDetailsPage";
import MealsPage from "./Pages/meals/MealsPage";
import NotFound from "./Components/notFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MealsPage />,
        },
        {
          path: "/category/:name",
          element: <MealsPage />,
        },
        {
          path: "mealDetails/:id",
          element: <MealDetailsPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
