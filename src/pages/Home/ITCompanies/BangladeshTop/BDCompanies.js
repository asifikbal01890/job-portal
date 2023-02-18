import React from 'react';
import { Link } from 'react-router-dom';

const BDCompanies = ({company}) => {
    const {id, companyName, logo} = company
    return (
        <div data-aos="zoom-in" className="card bg-base-100 hover:shadow-lg">
            <div className="card-body">
               <div className='h-[120px]'>
               <img className='h-[100px]' src={logo} alt="" />
               </div>
                <h2 className="card-title">{companyName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                   <Link to={`/bangladesh/company/${id}`}><button className="btn btn-primary">View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BDCompanies;