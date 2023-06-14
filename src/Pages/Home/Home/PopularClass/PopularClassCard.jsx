import React from 'react';

const PopularClassCard = ({popularClassData}) => {
     const {image, className, instructorName,instructorEmail} = popularClassData;
    return (
        <div className="card bg-rose-300 glass">
        <figure><img className="rounded-lg object-cover" src={image} alt="Movie" /></figure>
        <div className="card-body">
            <h2 className="card-title">Class name : {className}</h2>
            <p className="font-semibold">Instructor Name : {instructorName}</p>
            <p className="font-semibold">Instructor Email : {instructorEmail}</p>
            
            <div className="card-actions">
    
    </div>
        </div>

    </div>
    );
};

export default PopularClassCard;