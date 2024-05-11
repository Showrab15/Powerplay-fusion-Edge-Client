import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./instructorRoute";
import AllClasses from "../Pages/Dashboard/AdminDashboard/AllClasses/AllClasses";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses/MyClasses";
import Dashboard from "../Pages/Dashboard/Dashbaord/Dashboard";
import Instructors from "../Pages/Instrcutors/Instructors";
import Classes from "../Classes/Classes";
import SelectedClass from "../Pages/Dashboard/StudentDashBoard/SelectedClass/SelectedClass";
import PaymentClass from "../Pages/Dashboard/StudentDashBoard/PaymentClass/PaymentClass";
import EnrolledClass from "../Pages/Dashboard/StudentDashBoard/EnrolledClass/EnrolledClass";
import PaymentHistory from "../Pages/Dashboard/StudentDashBoard/PaymentHistory/PaymentHistory";

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
        path :'instructors',
        element : <Instructors></Instructors>
      },
      {
        path : 'classes',
        element : <Classes></Classes>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
    
          //instructor routes
          {
          path: 'addClass',
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
          },
          {
            path: 'myClass',
            element : <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
          },
          {
            path : 'allUsers',
            element : <AdminRoute> <AllUsers></AllUsers></AdminRoute>
          },
          {
            path : 'allClasses',
            element : <AdminRoute><AllClasses></AllClasses></AdminRoute>
          },
          {
            path : 'mySelectedClass',
            element : <PrivateRoute><SelectedClass></SelectedClass></PrivateRoute>
          },
          {
            path : 'mySelectedClass/payment/:id',
            element : <PrivateRoute><PaymentClass></PaymentClass></PrivateRoute>,
            loader: ({params}) => {return fetch(`https://assignment12-server-ten.vercel.app/selectedClass/${params.id}`)},

          },
          {
            path : 'enrolledClass',
            element : <PrivateRoute><EnrolledClass></EnrolledClass></PrivateRoute>
          },
          {
            path : 'paymentHistory',
            element :     <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>

          }
        ]
        }
    ]
  

  }


]);


export default router