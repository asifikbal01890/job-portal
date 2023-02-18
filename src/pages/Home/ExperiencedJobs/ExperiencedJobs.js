import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ExperiencedJob from './ExperiencedJob';

const ExperiencedJobs = () => {
    const jobs = [
        {
            id: "01",
            companyName: "Red Ventures",
            positionName: "Senior Software Engineer",
            location: "United States",
        },
        {
            id: "02",
            companyName: "Braintrust",
            positionName: "Full-stack developer",
            location: "Boston, MA",
        },
        {
            id: "03",
            companyName: "Acuity Brands",
            positionName: "Senior React Developer",
            location: "Conyers, GA",
        },
        {
            id: "04",
            companyName: "J. J. Keller & Associates, Inc.",
            positionName: "Software Architect",
            location: "New Delhi, India",
        },
        {
            id: "05",
            companyName: "U.S. Bank",
            positionName: "Senior Software Engineer",
            location: "Irving, TX",
        },
        {
            id: "06",
            companyName: "Dice",
            positionName: "Senior React Front End Developer",
            location: "Omaha, NE",
        }
    ]
    return (
        <div className='py-28 bg-slate-100'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Experienced Jobs</h1>
                <h4 className='text-xl'>Top 6 Suggestions</h4>
            </div>
            <div className='mt-28'>
                {
                    jobs.map(job => <ExperiencedJob
                        key={job.id}
                        job={job}
                    ></ExperiencedJob>)
                }
            </div>
            <div className='flex justify-center pt-9'>
            <Link to={'/experienced/job'}><button className="btn btn-outline btn-primary">See All Jobs <span className='pl-2'><BsArrowRight></BsArrowRight></span></button></Link>
            </div>
        </div>
    );
};

export default ExperiencedJobs;