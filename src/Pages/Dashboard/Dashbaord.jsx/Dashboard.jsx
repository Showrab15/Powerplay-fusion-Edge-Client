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
          <li ><Link to="/dashboard/adminhome"><FaHome></FaHome> Admin Home </Link></li>
                    <li><Link to="/dashboard/addItem"><FaUtensils></FaUtensils> Add An Item</Link></li>
                    <li><Link to="/dashboard/manageItems"><FaWallet></FaWallet> Manage Items</Link></li>
                    <li><Link to="/dashboard/reservations"><FaBook></FaBook> Manage Bookings</Link></li>
                    <li><Link to="/dashboard/allusers"><FaUsers></FaUsers> All Users</Link></li>
                    <div className="divider"></div>
                    <li><Link t='/'><FaHome></FaHome>Home</Link>  </li>
                    <li><Link t='/menu'><FaList></FaList>Our Menu </Link> </li>
                    <li><Link t='/order/salad'><FaList></FaList>Order Food  </Link> </li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;