import React from 'react';
import Swal from 'sweetalert2';

const AllClassesTable = ({singleClass,index,refetch}) => {

const {_id} = singleClass;
    const handleApproved = (id, status) => {
        console.log(id, status)
        fetch(`http://localhost:5000/addClasses/${id}/?status=${status}`, {
          method: 'PATCH'
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            if (data.modifiedCount) {
              refetch()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Your Class Approved !`,
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
    
      }


      const showModal = (id) => {

        const modal = document.getElementById(`my_modal_${id}`);
        if (modal) {
          modal.showModal();
        }
      };

      
      const sendFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const feedback =form.feedback.value;
        const requestBody = {
            feedback: feedback // Wrap the feedback value inside an object property
          };
        
       console.log(feedback)
       fetch(`http://localhost:5000/addClasses/${_id}`, {
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
              position: 'top-end',
              icon: 'success',
              title: `Your Class Approved !`,
              showConfirmButton: false,
              timer: 1500
            })
            onClose();}
        })
       
      };

    return (
        <>
              <tr key={singleClass._id}>
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

                      <button onClick={() => handleApproved(singleClass._id, "approved")} disabled={singleClass.status === 'deny' || singleClass.status === 'approved'} className="btn btn-success btn-sm">Approve</button>
                      <button className="btn  btn-error btn-sm" onClick={() => handleApproved(singleClass._id, "deny")} disabled={singleClass.status === 'deny' || singleClass.status === 'approved'} >deny</button>
                      {/* Open the modal using ID.showModal() method */}
                      <button className="btn" onClick={() => showModal(singleClass._id)}>open modal</button>
                      <dialog id={`my_modal_${singleClass._id}`} className="modal">
                        <form onSubmit={sendFeedback} method="dialog" className="modal-box">
                          <input

                            name='feedback'
                            placeholder="Write your feedback here..."
                            rows="4"
                            className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          ></input>
<input className="btn text-white bg-red-500 hover:bg-black" type="submit" value="feddback" />

                        </form>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>

                      </dialog>
                    </div>
                  </td>

                </tr>
        </>
    );
};

export default AllClassesTable;