import React from 'react';
import { FaHouseUser, FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    return (
        <>
<li ><Link to="/dashboard/allUsers"><FaHouseUser></FaHouseUser> Manage Users </Link></li>
<li ><Link to="/dashboard/allClasses"><FaHouseUser></FaHouseUser> Manage Classes </Link></li>
<div className="divider"></div>
<li><Link to="/"><FaLongArrowAltLeft></FaLongArrowAltLeft>Go Back </Link></li>
        </>
    )
};

export default AdminDashboard;


            

                   