import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import FresherJob from './FresherJob';

const FresherJobs = () => {
    const jobs = [
        {
            id: "01",
            companyName: "QBH Solution Private Limited",
            positionName: "Frontend Developer",
            location: "New Delhi, India",
        },
        {
            id: "02",
            companyName: "Schrodinger Ideas Private Limited",
            positionName: "Associate Backend Developer",
            location: "Rajasthan, India",
        },
        {
            id: "03",
            companyName: "Woodiewin Technology Private Limited",
            positionName: "Junior Software Developer",
            location: "Raipur, India",
        },
        {
            id: "04",
            companyName: "QBH Solution Private Limited",
            positionName: "PHP Developer",
            location: "New Delhi, India",
        },
        {
            id: "05",
            companyName: "Runway Technologies Private Limited",
            positionName: "Full Stack Developer",
            location: "Birbhum, West Bengal",
        },
        {
            id: "06",
            companyName: "Boka Tech OPC Private Limited",
            positionName: "Fresher MEAN Stack Developer",
            location: "Maharashtra, India",
        }
    ]
    return (
        <div className='py-28 bg-slate-200 '>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Fresher Jobs</h1>
                <h4 className='text-xl'>Top 6 Suggestions</h4>
            </div>
            <div className='mt-28'>
                {
                    jobs.map(job => <FresherJob
                        key={job.id}
                        job={job}
                    ></FresherJob>)
                }
            </div>
            <div className='flex justify-center pt-9'>
            <Link to={'/fresher/job'}><button className="btn btn-outline btn-primary">See All Jobs <span className='pl-2'><BsArrowRight></BsArrowRight></span></button></Link>
            </div>
        </div>
    );
};

export default FresherJobs;