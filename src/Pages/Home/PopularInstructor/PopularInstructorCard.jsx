import React from 'react';
import { motion } from "framer-motion";

const PopularInstructorCard = ({popularInsturctorData}) => {
    const {photo, name,email} = popularInsturctorData;
    
    return (
        <div className="card glass bg-rose-600  ">
             <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
  >
            <figure><img src={photo} className="rounded-lg object-cover w-full h-64" alt="instructor" /></figure>

  </motion.div>
        <div className="card-body">
            <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">{email}</div>
            </h2>
        </div>
    </div>
    );
};

export default PopularInstructorCard;