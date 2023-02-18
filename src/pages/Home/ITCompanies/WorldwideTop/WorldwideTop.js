import React from 'react';
import WCompanies from './WCompanies';
import microsoft from '../../../../img/microsoft.png';
import ibm from '../../../../img/ibm.png';
import accenture from '../../../../img/accenture.png';

const WorldwideTop = () => {
    const companies = [
        {
            id: "01",
            companyName: "Microsoft Corporation",
            logo: microsoft,
            description: "discreption"

        },
        {
            id: "02",
            companyName: "International Business Machines Corporation",
            logo: ibm,
            description: "The brain station 23 limited is the largest software and it company which started the journey in 2006. It provides the software products both global and local market. The It sector has spread out some countries now a days such as Netherlands, Denmark, Switzerland, Canada, UK, USA, Israel."
        },
        {
            id: "03",
            companyName: "Accenture",
            logo: accenture,
            description: "Data Soft is well known as the first CMMI Level 5 software development company in Bangladesh. In both Corporate and public sectors, Data soft delivered innovative and cost effective technical services for the customers. In design and create projects, It has contributed significantly to the digitalization of Bangladesh."
        }
    ]
    return (
        <div className='py-28 bg-slate-200'>
            <div className='text-center'>
                <h4 className='text-2xl'>Top 3 IT Companies Worldwide</h4>
            </div>
            <div className='mt-28 grid lg:grid-cols-3 md:grid-cols-2 gap-9 max-w-[1440px] xl:mx-auto mx-9'>
                {
                    companies.map(company => <WCompanies
                        key={company.id}
                        company={company}
                    ></WCompanies>)
                }
            </div>
        </div>
    );
};

export default WorldwideTop;