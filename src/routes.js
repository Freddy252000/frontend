import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import SimpleLayout from "./layouts/simple";
//

import CategoriesPage from "./pages/CategoriesPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";

import DashboardAppPage from "./pages/DashboardAppPage";
import AddUser from "./components/form/AddUser";
import EditUser from "./components/form/EditUser";
import ViewUser from "./components/form/ViewUser";
import AddProject from "./components/form/AddProject";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/main",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        { path: "categories", element: <CategoriesPage /> },
       
        { path: "adduser", element: <AddUser /> },
        { path: "edituser/:id", element: <EditUser /> },
        { path: "viewuser/:id", element: <ViewUser /> },
        { path: "addproject", element: <AddProject /> },
      ],
    },

    {
      path: "/project",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        { path: "categories", element: <CategoriesPage /> },
       
        { path: "adduser", element: <AddUser /> },
        { path: "edituser/:id", element: <EditUser /> },
        { path: "viewuser/:id", element: <ViewUser /> },
        { path: "addproject", element: <AddProject /> },
      ],
    },

    {
      path: "login",
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
