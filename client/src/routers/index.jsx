import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ItemLayout from "../layouts/ItemLayout";
import { CreateItem, DetailItem, HomeItem, Login, UpdateItem } from "../pages";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "items",
        element: <ItemLayout />,
        children: [
          {
            path: "",
            element: <HomeItem />,
          },
          {
            path: "create",
            element: <CreateItem />,
          },
          {
            path: "detail/:id",
            element: <DetailItem />,
          },
          {
            path: "update/:id",
            element: <UpdateItem />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
]);

export default routers;
