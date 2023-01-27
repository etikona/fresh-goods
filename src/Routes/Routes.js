import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Customers from "../Pages/Customers";
import Home from "../Pages/Home/Home";
import Update from "../Pages/Update";
import Login from "../Pages/User/Login";
import Signup from "../Pages/User/Signup";

export const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/signup',
                    element: <Signup />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/customers',
                    element: <Customers />,
                    loader: () => fetch('https://fresh-goodes-server.vercel.app/customers')
                },
                {
                    path: '/update/:id',
                    element: <Update />,
                    loader: ({ params }) => fetch(`https://fresh-goodes-server.vercel.app/customers/${params.id}`)
                },
            ]
        }
    ]
)