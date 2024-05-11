import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import SectionTitle from '../../../../components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useClasses from '../../../../hooks/useClasses';
import Swal from 'sweetalert2';
import AllClassesTable from './AllClassesTable';

const AllClasses = () => {

  const [classes, , refetch] = useClasses();


 



 





  



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
              <AllClassesTable singleClass={singleClass}
              index={index} 
              key={singleClass._id}
              refetch={refetch}
              ></AllClassesTable>

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