import React from 'react';
import useClasses from '../../../../hooks/useClasses';
import PopularClassCard from './PopularClassCard';
import SectionTitle from '../../../../components/SectionTitle';
import { BallTriangle } from 'react-loader-spinner';

const PopularClass = () => {

    const [classes, loading] = useClasses();
    const sorted = classes.sort((a, b) => b.enrolled - a.enrolled);
    const popularClasses = sorted.slice(0, 6);  
      return (
        <div>
              <div className="my-8">
                <SectionTitle heading={'Our Popular Classes'}  />
            </div>
            {
                loading ?  <div className="flex items-center justify-center h-screen">
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
                            popularClasses.map((popularClassData) => <PopularClassCard popularClassData={popularClassData} key={popularClassData._id} />)
                        }
                    </div>
                    }
        </div>
    );
};

export default PopularClass;