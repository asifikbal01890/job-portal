import React from 'react';
import pridesys from '../../../../img/Pridesys.png';
import brain23 from '../../../../img/brain23.png';
import datasoft from '../../../../img/datasoft.png';
import BDCompanies from './BDCompanies';


const BangladeshTop = () => {
    const companies = [
        {
            id: "01",
            companyName: "Pridesys IT Limited",
            logo: pridesys,
            description: "discreption"

        },
        {
            id: "02",
            companyName: "Brain Station 23",
            logo: brain23,
            description: "The brain station 23 limited is the largest software and it company which started the journey in 2006. It provides the software products both global and local market. The It sector has spread out some countries now a days such as Netherlands, Denmark, Switzerland, Canada, UK, USA, Israel."
        },
        {
            id: "03",
            companyName: "datasoft systems bangladesh limited",
            logo: datasoft,
            description: "Data Soft is well known as the first CMMI Level 5 software development company in Bangladesh. In both Corporate and public sectors, Data soft delivered innovative and cost effective technical services for the customers. In design and create projects, It has contributed significantly to the digitalization of Bangladesh."
        }
    ]
    return (
        <div className='py-28 bg-slate-200'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Top IT Companies</h1>
                <h4 className='text-2xl pt-5 '>Top 3 IT Companies in Bangladesh</h4>
            </div>
            <div className='mt-28 grid lg:grid-cols-3 md:grid-cols-2 gap-9 max-w-[1440px] xl:mx-auto mx-9'>
                {
                    companies.map(company => <BDCompanies
                        key={company.id}
                        company={company}
                    ></BDCompanies>)
                }
            </div>
        </div>
    );
};

export default BangladeshTop;