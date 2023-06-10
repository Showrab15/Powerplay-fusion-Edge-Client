import useClasses from "../../../../hooks/useClasses";
import useMyClass from "../../../../hooks/useMyClass";


const MyClasses = () => {


  const [instructorClass] = useMyClass();
  console.log(instructorClass)
    return (
        <div className="w-full">
            <h2 className="text-center font-bold text-3xl">My  Classes In Powerplay Fusion Edge</h2>

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
    {instructorClass.map((singleClass, index) => 
     <tr key={singleClass._id}>
     <th>{index+1}</th>
     <td>
         <div className="avatar">
           <div className="mask mask-squircle w-12 h-12">
             <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
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
     <td>
    

     <button className="btn btn-success btn-xs">{singleClass.status}</button>
  
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

export default MyClasses;