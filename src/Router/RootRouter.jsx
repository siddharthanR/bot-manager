import { Navigate, RouterProvider, createHashRouter } from "react-router-dom";
import ParentLayout from "../components/ParentLayout/ParentLayout";
import Contact from "../components/Contact/Contact";
import Bot from "../components/Bot/Bot";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Home from "../components/Home/Home";
import ResetPassword from "../components/ResetPassword/ResetPassword";

function AppRouterConfiguration() {

    const PrivateRoute = ({ children }) => {
        return sessionStorage.getItem("token") !== null ? children : <Navigate to="/login" />;
    }

    const router = createHashRouter([
        {
            path: "/",
            element: <PrivateRoute><ParentLayout /></PrivateRoute>,
            children: [
                {
                    path: "home",
                    element: <Home />,
                },
                {
                    path: "bot",
                    element: <Bot />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "dashboard",
                    element: <Dashboard />,
                },
            ],
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "signup",
            element: <Signup />
        },
        {
            path: "forgot-password",
            element: <ResetPassword />
        }
    ])
    return <RouterProvider router={router} />
}

export default AppRouterConfiguration