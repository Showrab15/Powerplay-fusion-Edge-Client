import React, { useState } from 'react';

const MyClassesTable = ({ singleClass, index }) => {

  const { _id, className, feedback, image, instructorEmail, instructorName, classPrice, availableSeats, status } = singleClass;
  // console.log(feedback[0])

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  const [modalOpen, setModalOpen] = useState(false);



  return (
    <>
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
        <td className="w-8">{instructorEmail}</td>
        <td>${classPrice}</td>
        <td>{availableSeats}</td>
        <td><button className={status === 'approved' ? 'bg-green-400 rounded-full uppercase btn-xs' : status === 'deny' ? "bg-red-600 rounded-full uppercase btn-xs" : 'bg-yellow-400 rounded-full uppercase btn-xs'}>{status}</button></td>
        <td><button className="btn btn-rounded-gull btn-xs" onClick={() => showModal(singleClass._id)}>Feedback</button></td>
        <td><button className="btn rounded-full btn-xs">Update</button></td>


        <dialog id={`my_modal_${singleClass._id}`} open={modalOpen} className="modal">

          <div method="dialog">
            <button className="btn btn-xs text-white bg-gray-600 hover:bg-black" onClick={closeModal}>✕</button>
            <div className="modal-box">
              {feedback ? feedback.map(fdbk => <ul><li className="font-semibold italic">{fdbk}</li></ul>) : "Your Class Has not Any Feddback"}
            </div>
          </div>
        </dialog>

      </tr>
    </>
  );
};

export default MyClassesTable;