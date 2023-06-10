import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import SectionTitle from '../../../../components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useClasses from '../../../../hooks/useClasses';
import Swal from 'sweetalert2';

const AllClasses = () => {

  const [classes, ,refetch] = useClasses();


  const handleApproved=(id, status)=>{
 console.log(id,status)
      fetch(`http://localhost:5000/addClasses/${id}/?status=${status}`, {
          method: 'PATCH'
      })
      .then(res => res.json())
      .then(data => {
          // console.log(data)
          if(data.modifiedCount){
              refetch();
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
    return (
        <div className="w-full">
            <h2 className="text-center font-bold text-3xl">All Classes of Powerplay Fusion Edge</h2>

            <div>
           <div className="overflow-x-auto mt-4">
  <table className="table font-bold">
    <thead >
      <tr>
        <th>#</th>
        <th>Class Image</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Instructor Email</th>
        <th>Class Price</th>
        <th>Available Seats</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    {classes.map((singleClass, index) => 
     <tr key={singleClass._id}>
     <th>{index+1}</th>
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

     <button onClick={()=>handleApproved(singleClass._id, "approved")}  disabled={singleClass.status === 'deny'|| singleClass.status ==='approved'}className="btn btn-success btn-sm">Approve</button>
     <button className="btn  btn-error btn-sm" onClick={()=>handleApproved(singleClass._id, "approved")}  disabled={singleClass.status === 'deny'|| singleClass.status ==='approved'} >deny</button>
     <button className="btn  btn-primary btn-sm">Feedback</button>
     </div>
     </td>

   </tr>
    
    ) 
    }
     
    </tbody>
   
  </table>
</div>
            </div>
        </div>
    );
};

export default AllClasses;