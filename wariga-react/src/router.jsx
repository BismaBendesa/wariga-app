import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/DashboardPage";
import ForgotPassword from "./pages/Password/ForgotPassword";
import ResetPass from "./pages/Password/ResetPass";
import Konsultasi from "./pages/Konsultasi/Konsultasi";
import LandingPage from "./pages/LandingPage";
import BookingKonsulPertama from "./pages/BookingKonsultasi/BookingKonsul_pertama";
import BookingKonsulKedua from "./pages/BookingKonsultasi/BookingKonsul_kedua";
import BookingKonsulKetiga from "./pages/BookingKonsultasi/BookingKonsul_ketiga";
import TentangWariga from "./pages/TentangWariga/TentangWariga.1";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/wariga" />,
            },
            {
                path: "/wariga",
                element: <LandingPage />,
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
            {
                path: "/konsultasi",
                element: <Konsultasi />,
            },
            {
                path: "/konsultasi/booking/1",
                element: <BookingKonsulPertama />,
            },
            {
                path: "/konsultasi/booking/2",
                element: <BookingKonsulKedua />,
            },
            {
                path: "/konsultasi/booking/3",
                element: <BookingKonsulKetiga />,
            },
            {
                path: "/tentang-wariga",
                element: <TentangWariga />,
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
