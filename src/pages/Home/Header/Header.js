import React from 'react';
import bannerImg from '../../../img/banner.jpg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='relative'>
                <div className='banner'>
                    <img className='' src={bannerImg} alt="" />
                </div>
                <div className='absolute top-[25%] right-[49%] text-white text-left w-[38%] hidden md:block'>
                    <h4 className='font-medium xl:text-xl text-lg'>Easiest way to find a perfect job</h4>
                    <h1 className='font-bold xl:text-5xl text-4xl xl:py-6 py-3'>Find Your Next</h1>
                    <h1 className='font-bold xl:text-5xl text-4xl'>Dream Job</h1>
                    <p className='py-6 hidden lg:block'>
                        <span>JOB PORTAL</span> is a global online marketplace where you can post job for your company and Apply for your dream job. Use this Job Portal and find your dream motorcycle.
                    </p>
                    <button className='btn btn-primary mt-4'>LOOKING FOR A JOB</button>
                    <button className='btn btn-error text-white bg-red-500 ml-4 mt-4'>Find Talent</button>
                </div>
            </div>
        </div>
    );
};

export default Header;