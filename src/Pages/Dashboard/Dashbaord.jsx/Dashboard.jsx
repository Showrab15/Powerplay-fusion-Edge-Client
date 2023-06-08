import React from 'react';
import { FaBook, FaCalendarAlt, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer  lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-red-600 text-white">
          <li ><Link to="/dashboard/instructorHome"><FaHome></FaHome> Admin Home </Link></li>
                    <li><Link to="/dashboard/addClass"><FaUtensils></FaUtensils> Add A Class</Link></li>
                    <li><Link to="/dashboard/myClass"><FaWallet></FaWallet> My  Classes</Link></li>
                    
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;