import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Reviews from "../../Pages/Reviews/Reviews";
import About from "../../Pages/About/About";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointments from "../../Pages/MyAppointments/MyAppointments";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute";
import AddDoctor from "../../Pages/AddDoctor/AddDoctor";
import ManageDoctors from "../../Pages/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Payment/Payment";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews /></PrivateRoute>
            }
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointments />
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute> <AddDoctor /></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute> <ManageDoctors /></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/payment/${params.id}`),
                element: <Payment></Payment>
            }
        ]

    }
]) 