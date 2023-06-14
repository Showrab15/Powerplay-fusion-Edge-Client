import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SelectedClassTable = ({ singleSelectedClass, index, refetch }) => {

    // console.log(singleSelectedClass)
    const { selectClassId, _id, className, image, instructorName, instructorEmail, availableSeats, classPrice } = singleSelectedClass;


    const handleDelete = (itemId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment12-server-ten.vercel.app/selectedClass/${itemId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                        }
                    });
            }
        });
    };


    return (

        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>
                {className}
            </td>
            <td>{instructorName}</td>
            <td>{instructorEmail}</td>
            <td>${classPrice}</td>
            <td>{availableSeats}</td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn'>
                    Delete
                </button>
            </td>
            <td>
            <Link to={`payment/${_id}`}>
                                            <button className="btn " >
                                                Pay
                                            </button>
                                        </Link>
            </td>
        </tr>

    );
};

export default SelectedClassTable;