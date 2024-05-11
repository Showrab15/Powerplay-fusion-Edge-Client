import React from 'react';

const InstructorCard = ({ singleInstructor }) => {

    console.log(singleInstructor)
    const { photo, name, email } = singleInstructor;
    console.log(singleInstructor)
    return (
        <div className="card glass bg-rose-600  ">
            <figure><img src={photo} className="rounded-lg object-cover w-full h-64" alt="instructor" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{email}</div>
                </h2>
            </div>
        </div>
    );
};

export default InstructorCard;


