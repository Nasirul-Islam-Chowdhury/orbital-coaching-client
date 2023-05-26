import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Services from "../../pages/services/Services";
import ServiceDetails from "../../pages/serviceDetails/ServiceDetails";

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
                path: '/serviceDetails/:id',
                element: <ServiceDetails/>,
                loader: ({params})=> fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            }
        ]

    }
])

