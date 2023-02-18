import React from 'react';
import ExperiencedJobs from './ExperiencedJobs/ExperiencedJobs';
import FresherJobs from './FresherJobs/FresherJobs';
import Header from './Header/Header';
import ITCompanies from './ITCompanies/ITCompanies';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <FresherJobs></FresherJobs>
            <ExperiencedJobs></ExperiencedJobs>
            <ITCompanies></ITCompanies>
        </div>
    );
};

export default Home;