import React from 'react';

const PopularClassCard = ({popularClassData}) => {
     const {image, className, instructorName,instructorEmail, availableSeats,classPrice} = popularClassData;
    return (
        <div className="card bg-rose-600 glass">
        <figure><img className="rounded-lg  object-cover" src={image} alt="Movie" /></figure>
        <div className="card-body">
            <h2 className="card-title">Class name : {className}</h2>
            <p className="font-semibold">Class Price : $ {classPrice}</p>
            <p className="font-semibold">Available Seats  : {availableSeats}</p>

            <p className="font-semibold">Instructor Name : {instructorName}</p>
            
            <div className="card-actions">
    
    </div>
        </div>

    </div>
    );
};

export default PopularClassCard;