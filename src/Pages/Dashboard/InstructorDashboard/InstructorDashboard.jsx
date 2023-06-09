import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InstructorDashboard = () => {
    return (
        <>
          <li><Link to="/dashboard/addClass"><FaUtensils></FaUtensils>Add Classes</Link></li>
          <li><Link to="/dashboard/myClass"><FaUtensils></FaUtensils>My Classes</Link></li>
        </>
    );
};

export default InstructorDashboard;