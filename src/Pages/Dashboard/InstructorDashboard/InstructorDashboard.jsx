import React from 'react';
import { FaBowlingBall ,FaHome, FaLongArrowAltLeft} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InstructorDashboard = () => {
    return (
        <>
          <li><Link to="/dashboard/addClass"><FaBowlingBall></FaBowlingBall>Add Classes</Link></li>
          <li><Link to="/dashboard/myClass"><FaHome></FaHome>My Classes</Link></li>
          <div className="divider"></div>
          <li><Link to="/"><FaLongArrowAltLeft></FaLongArrowAltLeft>Go Back </Link></li>

        </>
    );
};

export default InstructorDashboard;