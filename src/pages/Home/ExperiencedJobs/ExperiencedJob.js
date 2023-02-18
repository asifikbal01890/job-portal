import React from 'react';
import { BsFillLayersFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ExperiencedJob = ({job}) => {
    const { companyName, positionName, location, id } = job;
    return (
        <div data-aos="fade-up" className='md:flex justify-between max-w-[1440px] mx-auto my-5 hover:shadow-lg bg-white p-8'>
            <div>
                <h1 className="text-4xl">{positionName}</h1>
                <div className='md:flex gap-6'>
                    <div className='flex md:justify-center items-center gap-2'>
                        <BsFillLayersFill></BsFillLayersFill>
                        <p className="text-primary">{companyName}</p>
                    </div>
                    <div className='flex md:justify-center items-center gap-1'>
                        <MdLocationOn></MdLocationOn>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/apply/${id}`}><button className="btn btn-primary mt-5 md:mt-0">Apply Job</button></Link>
            </div>
        </div>
    );
};

export default ExperiencedJob;