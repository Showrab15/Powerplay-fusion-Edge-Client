import React, { useEffect, useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import InstructorCard from './InstructorCard';
import SectionTitle from '../../components/SectionTitle';


const Instructors = () => {

    const [instructors, setInstructor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const instructorData = data.filter(user => user.role === 'instructor');
                setInstructor(instructorData)
                console.log(instructorData)
            })
    }, [])
    return (
        <div>
            <SectionTitle heading={"All Respectfull Instructor Of Powerplay Fusion Edge"}></SectionTitle>
            <div className="grid gap-8 grid-col-1 mx-auto md:grid-cols-3">
                {
                    instructors.map(singleInstructor => (
                        <InstructorCard key={singleInstructor._id}

                            singleInstructor={singleInstructor}

                        ></InstructorCard>

                    ))
                }
            </div>
        </div>
    );
};

export default Instructors;