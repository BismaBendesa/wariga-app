import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/DashboardPage";
import ForgotPassword from "./pages/LupaPass/ForgotPassword";
import ResetPass from "./pages/ResetPass/ResetPass";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/lupa-password",
                element: <ForgotPassword />,
            },
            {
                path: "/reset-password",
                element: <ResetPass />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
