import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // ✅ use element instead of Component
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/login",
                element: <Login />, // ✅ correct usage
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                // ✅ Protected routes wrapper
                element: <ProtectedRoute />,
                children: [
                    {
                        index: true,
                        element: <Layout />, // Home ("/")
                    },
                    // Add more protected children here if needed
                ],
            },
        ],
    },
]);
