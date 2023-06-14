import React, { useEffect, useState } from 'react';
import SHowClassCard from './SHowClassCard';
import SectionTitle from '../components/SectionTitle';

const Classes = () => {

     const [approvedClasses, setApprovedClasses] = useState([]);



useEffect(() => {
    fetch('https://assignment12-server-ten.vercel.app/addClasses')
        .then(res => res.json())
        .then(data => {
            const approvedClassData = data.filter(classes => classes.status === 'approved');
            setApprovedClasses(approvedClassData)
            // console.log(approvedClassData)
        })
}, [])


    return (
        <div className="w-full">
            <SectionTitle heading={"All Classes Of Powerplay Fusion Edge "}></SectionTitle>
            <div className='grid md:grid-cols-3 mx-auto gap-8'>
                {
                    approvedClasses?.map(singleClass => <SHowClassCard  singleClass={singleClass} key={singleClass._id}></SHowClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;