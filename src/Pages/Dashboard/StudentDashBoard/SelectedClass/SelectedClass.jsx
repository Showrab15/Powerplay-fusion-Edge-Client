import React from 'react';
import useSelectedClass from '../../../../hooks/useSelectedClass';
import SelectedClassTable from './SelectedClassTable';

const SelectedClass = () => {

    const [selectedClass, refetch] = useSelectedClass();

    // console.log(selectedClass)
    return (
        <div className="w-full">
      <h2 className="text-center font-bold text-3xl">These Class You Have Been Selected For Purchase </h2>

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
                <th>Action </th>
                <th> Pay</th>
              </tr>
            </thead>
            <tbody>
              {selectedClass.map((singleSelectedClass, index) =>
              <SelectedClassTable singleSelectedClass={singleSelectedClass}
              index={index} 
              key={singleSelectedClass._id}
              refetch={refetch}
              ></SelectedClassTable>

              )
              }

            </tbody>

          </table>
        </div>
      </div>
    </div>
    );
};

export default SelectedClass;