import React, { useEffect, useState } from 'react';
import SHowClassCard from './SHowClassCard';
import SectionTitle from '../components/SectionTitle';

const Classes = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addClasses')
            .then(res => res.json())
            .then(data => {
                const classData = data.filter(classes => classes.
                    status === 'approved');
                setClasses(classData)
                console.log(classData)
            })
    }, [])
    console.log(classes);
    return (
        <div className="w-full">
            <SectionTitle heading={"All Classes Of Powerplay Fusion Edge "}></SectionTitle>
            <div className='grid md:grid-cols-3 mx-auto gap-8'>
                {
                    classes.map(singleClass => <SHowClassCard singleClass={singleClass} key={singleClass._id}></SHowClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;