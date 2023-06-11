import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import Swal from 'sweetalert2';
import useClasses from '../hooks/useClasses';

const SHowClassCard = ({ singleClass,refetch }) => {
    console.log(singleClass);
    const navigate = useNavigate();
    const location = useLocation();
    const { _id, className, image, instructorEmail, feedback, instructorName, classPrice, availableSeats } = singleClass;
    // const [availableSeats, setAvailableSeats] = useState(classs.availableSeats);
    const { user } = useAuthContext();


    const handleAddToCart = (item) => {

        const updatedSeats = availableSeats - 1;
        console.log(item);
        if (user && user.email) {
            const selectedClass = { selectedClassId: _id, className, image, instructorEmail, feedback, instructorName, classPrice, availableSeats: updatedSeats, email: user.email }
            fetch('http://localhost:5000/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                         refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
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
                        <button onClick={handleAddToCart} className="btn">Buy Class</button>
                    </div>
                </div>

            </div>
    );
};

export default SHowClassCard;
