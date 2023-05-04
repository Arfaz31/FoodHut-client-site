import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
            path: '/',
            element: <Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/blog',
                element:<Blog/>
            }
        ]
    }
])

export default router;