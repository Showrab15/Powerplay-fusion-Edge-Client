import React from 'react';
import { FaHome, FaBowlingBall, FaLongArrowAltLeft, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StudentDashBoard = () => {
    return (
        <>
            <li><Link to="enrolledClass"><FaHome></FaHome> My Enrolled Class</Link></li>
            <li ><Link to="mySelectedClass"><FaBowlingBall></FaBowlingBall> Selected  Class </Link></li>
            <li ><Link to="paymentHistory"><FaDollarSign></FaDollarSign> Payments  History </Link></li>
            <div className="divider"></div>
            <li><Link to="/"><FaLongArrowAltLeft></FaLongArrowAltLeft>Go Back Home </Link></li>
        </>
    );
};

export default StudentDashBoard;