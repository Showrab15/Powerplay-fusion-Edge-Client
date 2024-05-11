import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AllClassesTable = ({singleClass,index,refetch}) => {
 
const {_id} = singleClass;
    const handleApproved = (id, status) => {



        console.log(id, status)
        fetch(`https://assignment12-server-ten.vercel.app/addClasses/${id}/?status=${status}`, {
          method: 'PATCH'
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            if (data.modifiedCount) {
              refetch();
              closeModal()
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${singleClass.instructorName}'s Class  Approved!`,
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
    
      }
     
      
      const showModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


const [modalOpen, setModalOpen] = useState(false);
      
      const sendFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const feedback =form.feedback.value;
        const requestBody = {
            feedback: feedback // Wrap the feedback value inside an object property
          };
        
       console.log(feedback)
       fetch(`https://assignment12-server-ten.vercel.app/addClasses/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.modifiedCount) {
            form.reset();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `Feedback Sent For ${singleClass.instructorName}' Class!`,
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
       
      };

    return (
        <>
              <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={singleClass.classImage} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>

                  </td>
                  <td>
                    {singleClass.className}
                  </td>
                  <td>{singleClass.instructorName}</td>
                  <td>{singleClass.instructorEmail}</td>
                  <td>${singleClass.classPrice}</td>
                  <td>{singleClass.availableSeats}</td>
                  <td>{singleClass.status}</td>
                  <td>
                    <div className="flex flex-col gap-2   items-center space-x-3">

                      <button onClick={() => handleApproved(singleClass._id, "approved")} disabled={singleClass.status === 'deny' || singleClass.status === 'approved'} className="btn btn-success btn-xs">Approve</button>
                      <button className="btn  btn-error btn-xs" onClick={() => handleApproved(singleClass._id, "deny")} disabled={singleClass.status === 'deny' || singleClass.status === 'approved'} >deny</button>
                      {/* Open the modal using ID.showModal() method */}
                      <button className="btn btn-xs" onClick={() => showModal(singleClass._id)}>Feedback</button>
                    <dialog id={`my_modal_${singleClass._id}`} open={modalOpen} className="modal">

                        <div method="dialog">
                            <button className="btn btn-xs text-white bg-gray-600 hover:bg-black" onClick={closeModal}>✕</button>
                            <form onSubmit={sendFeedback} className="modal-box">
                                <input
                                required
                                    name='feedback'
                                    placeholder="Write your feedback here..."
                                    rows="4"
                                    className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                ></input>
                                <input className="btn mt-4 text-white btn-sm" type="submit" value="feedback" />
                            </form>
                        </div>
                    </dialog>
                    </div>
                  </td>

                </tr>
        </>
    );
};

export default AllClassesTable;