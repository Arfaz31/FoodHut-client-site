import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Error from "../pages/Error/Error";
import ReciepeDetails from "../pages/Home/ReciepeDetails/ReciepeDetails";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Error/>,
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
            },
            {
                path:'/recipe/:id',
                element: <PrivateRoute>
                    <ReciepeDetails/>
                </PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    }
])

export default router;