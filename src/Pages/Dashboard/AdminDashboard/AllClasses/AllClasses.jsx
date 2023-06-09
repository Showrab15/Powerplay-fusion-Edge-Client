// import React, { useEffect, useState } from 'react';
// import useAxiosSecure from '../../../../hooks/useAxiosSecure';
// import SectionTitle from '../../../../components/SectionTitle';

// const AllClasses = () => {


//     const [classes, setClasses] = useState([])

//    useEffect(()=>{
//     fetch('http://localhost:5000/class')
//     .then(res => res.json())
//     .then(data =>{
//         setClasses(data)
//         console.log(data)
//     })
//    },[])
//     return (
//         <div className="w-full">
//             <SectionTitle heading={'All Classes of Powerplay Fusion Edge'}></SectionTitle>

//             <div>
//                 {classes.map(class => )}
//             </div>
//         </div>
//     );
// };

// export default AllClasses;