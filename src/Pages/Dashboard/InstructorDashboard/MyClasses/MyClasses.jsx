import useClasses from "../../../../hooks/useClasses";
import useMyClass from "../../../../hooks/useMyClass";
import MyClassesTable from "./MyClassesTable";


const MyClasses = () => {


  const [instructorClass] = useMyClass();
  console.log(instructorClass);

  
  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-3xl">My  Classes In Powerplay Fusion Edge</h2>

      <div>
        <div className="overflow-x-auto mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th className="w-8">Instructor Email</th>
                <th>Class Price</th>
                <th>Available Seats</th>
                <th>Status</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {instructorClass.map((singleClass, index) =>

                <MyClassesTable
                index={index}
                  singleClass={singleClass}
                  key={singleClass._id}
                ></MyClassesTable>
              )
              }

            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;