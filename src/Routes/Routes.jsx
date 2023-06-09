import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashbaord.jsx/Dashboard";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path : 'register',
        element : <Register></Register>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
    
          //instructor routes
          {
          path: 'addClass',
          element: <PrivateRoute><AddClass></AddClass></PrivateRoute>
          },
          {
            path : 'allUsers',
            element : <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
          }
        ]
        }
    ]
  

  }


]);


export default router