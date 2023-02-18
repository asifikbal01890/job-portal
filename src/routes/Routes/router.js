import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import About from '../../pages/About/About';
import ContactUs from '../../pages/ContactUs/ContactUs';
import ApplyPage from '../../pages/Home/ApplyPage/ApplyPage';
import Home from '../../pages/Home/Home';
import LogIn from '../../pages/LogIn/LogIn';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import SignUp from '../../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main> ,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/apply/:id",
                element:<PrivateRoute><ApplyPage></ApplyPage></PrivateRoute>
            }
        ]
    },
    {
        path: "*",
        element: <PageNotFound></PageNotFound>
    }
]) 
export default router;   