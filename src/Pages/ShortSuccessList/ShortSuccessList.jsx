import React, { useEffect, useState } from 'react';
import { FaHandshake, FaWarehouse, FaCampground, FaBook } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle';

const ShortSuccessList = () => {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        const targetNumber = 1200; // Specify the target number
        const duration = 2000; // Duration of the animation in milliseconds
        const interval = 50; // Interval between each number increment

        const increment = Math.ceil(targetNumber / (duration / interval));

        const timer = setInterval(() => {
            setNumber((prevNumber) => {
                if (prevNumber + increment >= targetNumber) {
                    clearInterval(timer);
                    return targetNumber;
                } else {
                    return prevNumber + increment;
                }
            });
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            <SectionTitle
                heading={"Our Short Success "}
            ></SectionTitle>
            <div className="success-grid">
                <div className="success-card">
                    <div className="card-body">
                        <div className="md:flex items ">
                            <FaHandshake className="w-20 h-20"></FaHandshake>
                            <h2 className="text-3xl ml-12 mt-4 font-extrabold">{number}</h2>

                        </div>
                        <div className='mx-auto'>    <p className="font-semibold text-2xl ml-16 ">MemberShip</p>
                        </div>
                    </div>
                </div>
                <div className="success-card">
                    <div className="card-body">
                        <div className="md:flex items ">
                            <FaWarehouse className="w-20 h-20"></FaWarehouse>
                            <h2 className="text-3xl ml-12 mt-4 font-extrabold">{number}</h2>

                        </div>
                        <div className='mx-auto'>    <p className="font-semibold text-2xl ml-16 ">Workshop</p>
                        </div>
                    </div>
                </div>
                <div className="success-card">
                    <div className="card-body">
                        <div className="md:flex items ">
                            <FaCampground className="w-20 h-20"></FaCampground>
                            <h2 className="text-3xl ml-12 mt-4 font-extrabold">{number}</h2>

                        </div>
                        <div className='mx-auto'>    <p className="font-semibold text-2xl ml-16 ">Organised Camp</p>
                        </div>
                    </div>
                </div>
                <div className="success-card">
                    <div className="card-body">
                        <div className="md:flex items ">
                            <FaBook className="w-20 h-20"></FaBook>
                            <h2 className="text-3xl ml-12 mt-4 font-extrabold">{number}</h2>

                        </div>
                        <div className='mx-auto'>    <p className="font-semibold text-2xl ml-16 ">Publications</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShortSuccessList;