// import React, { useEffect, useState  } from 'react';
// import SectionTitle from '../../components/SectionTitle';

// const Testimonial = () => {

//     const [reviews, setReviews] = useState([]);

//     useEffect(()=>{
//         fetch('reviews.json')
//         .then(res=> res.json())
//         .then(data =>{
//             setReviews(data)
//         })
//     },[])
//     return (
//         <div>
//             <SectionTitle
//             heading={"Testimonial"}
//             ></SectionTitle>
//           {
// reviews.map(review=> 
//     <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
//     <div className="carousel-item">
//       <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
//     </div> 
  
//   </div>
//     )
//           }

//         </div>
//     );
// };

// export default Testimonial;