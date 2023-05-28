import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Services from "../../pages/services/Services";
import ServiceDetails from "../../pages/serviceDetails/ServiceDetails";
import Signup from "../../pages/Signup/Signup";
import Signin from "../../pages/signin/Signin";
import AddService from "../../pages/addService/AddService";
import MyReviews from "../../pages/myReviews/MyReviews";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/services',
                element: <Services/>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService/></PrivateRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews/></PrivateRoute>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/signin',
                element: <Signin/>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails/>,
                loader: ({params})=> fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            }
        ]

    }
])

