import React, { useEffect, useState } from 'react';
import SHowClassCard from './SHowClassCard';
import SectionTitle from '../components/SectionTitle';
import useClasses from '../hooks/useClasses';

const Classes = () => {

    // const [approvedClasses, setApprovedClasses] = useState([]);
const [classes, loading, refetch] = useClasses()
console.log(classes);


// const allClassss = classes.map(classs => classs) 

// const allClass = allClassss.filter(classes => classes.status === 'approved');
// setApprovedClasses(allClass);
    



    return (
        <div className="w-full">
            <SectionTitle heading={"All Classes Of Powerplay Fusion Edge "}></SectionTitle>
            <div className='grid md:grid-cols-3 mx-auto gap-8'>
                {
                    classes?.map(singleClass => <SHowClassCard refetch={refetch} singleClass={singleClass} key={singleClass._id}></SHowClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;