import React from 'react';
import useInstructors from '../../../hooks/useInstructors';
import { BallTriangle } from 'react-loader-spinner';
import SectionTitle from '../../../components/SectionTitle';
import PopularClassCard from '../Home/PopularClass/PopularClassCard';
import PopularInstructorCard from './PopularInstructorCard';

const PopularInstructor = () => {

    const [instructors, loading] = useInstructors();
    console.log(instructors)
    const popularInstructors = instructors.slice(0, 6);

    return (
        <div className='bg-base-300 py-8 my-8'>
            <div className="my-8">
                <SectionTitle heading={'Our Popular Instructors'} subHeading={'We have best Instructors, they will teach you properly'} />
            </div>

            {
                loading ? <div className="flex items-center justify-center h-screen">
                <BallTriangle
          
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
                </div>
                : <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 ">
                    {
                        popularInstructors.map((popularInsturctorData) =>
                        <PopularInstructorCard popularInsturctorData={popularInsturctorData} key={popularInsturctorData._id} />)
                    }
                </div>

            }
        </div>
    );
};

export default PopularInstructor;