import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import sponsor1 from '../../assets/sponsor1.jpg'
import sponsor2 from '../../assets/sponsor2.jpg'
import sponsor3 from '../../assets/sponsor3.jpg'
import sponsor4 from '../../assets/sponsor4.png'
const Sponsors = () => {
    return (
        <div>
            <SectionTitle
            heading={"OUR SPONSOR"}
            ></SectionTitle>
            <div className="grid md:grid-cols-4 grid-cols-2 group  gap-8">

                <div>
                    <img className='hover:animate-pulse  group-hover:scale-110 transition' src={sponsor1} alt="" />
                </div>
                <div>
                    <img  className='hover:animate-pulse group-hover:scale-110' src={sponsor2} alt="" />
                </div>
                <div>
                    <img className='hover:animate-pulse group-hover:scale-110' src={sponsor3} alt="" />
                </div>
                <div>
                    <img  className='hover:animate-pulse group-hover:scale-110 ' src={sponsor4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sponsors;