import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import Swal from 'sweetalert2';
import useInstructor from '../hooks/useInstructor';
import useAdmin from '../hooks/useAdmin';

const SHowClassCard = ({ singleClass, refetch }) => {
    // console.log(singleClass);
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuthContext();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    const [disabled, setDisabled] = useState(false);
    const { _id, className, image, instructorEmail, feedback, instructorName, classPrice, availableSeats } = singleClass;


    const handleAddClass = add => {

        setDisabled(true)

        if (user && user.email) {
            const selectedClasses = { selectClassId: _id, className, image, instructorName, instructorEmail, availableSeats, classPrice, email: user?.email }
            fetch('https://assignment12-server-ten.vercel.app/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClasses)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your class selected',
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }



    return (

        <div className="card bg-rose-600 glass">
            <figure><img className="rounded-lg object-cover" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Class name : {className}</h2>
                <p className="font-semibold">Instructor Name : {instructorName}</p>
                <p className="font-semibold">Instructor Email : {instructorEmail}</p>
                <p className="font-semibold">Available Seats : {availableSeats}</p>
                <p className="font-semibold ">Price : ${classPrice}</p>
                <div className="card-actions">
        
          {isAdmin || isInstructor || availableSeats === 0 ? (
            <>
              <button
                disabled
                onClick={handleAddClass}
                className='btn'
              >
                Select
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleAddClass}
                className='btn'
              >
                Select
              </button>
            </>
          )}
        </div>
            </div>

        </div>
    );
};

export default SHowClassCard;
