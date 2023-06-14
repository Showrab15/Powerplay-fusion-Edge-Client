import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import InstructorDashboard from '../InstructorDashboard/InstructorDashboard';
import StudentDashBoard from '../StudentDashBoard/StudentDashBoard';
import useInstructor from '../../../hooks/useInstructor';
import { BallTriangle } from  'react-loader-spinner'
import { motion } from "framer-motion";


const Dashboard = () => {

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (

    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
  >
 <div className="drawer  lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-4/3  bg-rose-600 h-full rounded-lg mt-2 text-white">

          {
            isAdmin ?
              <AdminDashboard></AdminDashboard> : isInstructor ? <InstructorDashboard></InstructorDashboard> :


<StudentDashBoard></StudentDashBoard>

          }


        </ul>

      </div>
    </div>  </motion.div>

   
  );
};

export default Dashboard;