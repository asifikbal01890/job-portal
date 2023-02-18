import React from 'react';
import { FaArrowLeft, FaFrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='mt-16 text-center'>
            <span className='flex justify-center mb-7 text-6xl text-red-500 '><FaFrown></FaFrown></span>
            <h1 className='text-3xl font-semibold text-red-500'> Page is not Available</h1>
            <div className='flex items-center justify-center'>
            <p className='mr-3 font-medium'>Please Go Back</p>
            <Link to='/' className='btn btn-outline btn-primary border-none'><FaArrowLeft></FaArrowLeft></Link>
            </div>
        </div>
    );
};

export default PageNotFound;