import React from 'react';
import { FaHome, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StudentDashBoard = () => {
    return (
        <>
         <li ><Link to="/dashboard/selectedclass"><FaHome></FaHome> Selected  Class </Link></li>
          <li><Link to="/dashboard/enrolledClass"><FaUtensils></FaUtensils> My Enrolled Class</Link></li>
          
        </>
    );
};

export default StudentDashBoard;