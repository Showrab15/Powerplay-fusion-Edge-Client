import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashbaord.jsx/Dashboard";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass/AddClass";

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
        element: <Dashboard></Dashboard>, 
        children: [
    
          //instructor routes
          {
          path: 'addClass',
          element: <AddClass></AddClass>
          },
        ]
        }
    ]
  

  }


]);


export default router