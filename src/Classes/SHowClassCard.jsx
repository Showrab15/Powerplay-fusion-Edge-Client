import React from 'react';

const SHowClassCard = ({ singleClass }) => {
    console.log(singleClass);
    return (
       
            <div className="card bg-rose-600 glass">
                <figure><img className="rounded-lg object-cover" src={singleClass.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class name : {singleClass.className}</h2>
                    <p className="font-semibold">Instructor Name : {singleClass.instructorName}</p>
                    <p  className="font-semibold">Instructor Email : {singleClass.instructorEmail}</p>
                    <p  className="font-semibold">Available Seats : {singleClass.availableSeats}</p>
                    <p  className="font-semibold ">Price : ${singleClass.classPrice}</p>
                    <div className="card-actions justify-start">
                        <button className="btn">Buy Class</button>
                    </div>
                </div>

            </div>
    );
};

export default SHowClassCard;
