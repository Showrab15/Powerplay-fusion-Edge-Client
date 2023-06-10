import React from 'react';
import Header from '../../Header/Header';
import Sponsors from '../../Sponsors/Sponsors';
import ShortSuccessList from '../../ShortSuccessList/ShortSuccessList';
import useAuthContext from '../../../hooks/useAuthContext';
import { BallTriangle } from 'react-loader-spinner';

const Home = () => {
    // const {loading} = useAuthContext();
//     if(loading){
//         return  <div className="flex items-center justify-center h-screen">
//         <BallTriangle
   
//     height={100}
//     width={100}
//     radius={5}
//     color="#4fa94d"
//     ariaLabel="ball-triangle-loading"
//     wrapperClass={{}}
//     wrapperStyle=""
//     visible={true}
//   />
//         </div>

    // }

    return (
        <>
            <Header></Header>
            <Sponsors></Sponsors>
            <ShortSuccessList></ShortSuccessList>
        </>
    );
};

export default Home;