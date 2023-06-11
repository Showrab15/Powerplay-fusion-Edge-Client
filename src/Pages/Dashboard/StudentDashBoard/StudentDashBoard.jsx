import React from 'react';
import { FaHome, FaBowlingBall, FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StudentDashBoard = () => {
    return (
        <>
            <li><Link to="/dashboard/enrolledClass"><FaHome></FaHome> My Enrolled Class</Link></li>
            <li ><Link to="/dashboard/selectedclass"><FaBowlingBall></FaBowlingBall> Selected  Class </Link></li>
            <div className="divider"></div>
            <li><Link to="/"><FaLongArrowAltLeft></FaLongArrowAltLeft>Go Back </Link></li>
        </>
    );
};

export default StudentDashBoard;