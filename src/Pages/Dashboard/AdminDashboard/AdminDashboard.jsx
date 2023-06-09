import React from 'react';
import { FaHome, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <>
            <li ><Link to="/dashboard/allUsers"><FaHome></FaHome> Manage Users </Link></li>
          <li><Link to="/dashboard/allClasses"><FaUtensils></FaUtensils>Manage Classes</Link></li>
        </>
    );
};

export default AdminDashboard;