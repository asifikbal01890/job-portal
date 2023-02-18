import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { IoMdCall } from "react-icons/io";

const Footer = () => {
    return (
        <footer className=' bg-slate-800 '>
            <div className="footer p-10 text-white max-w-[1440px] mx-auto px-5">
            <div>
                <p className="normal-case text-xl font-bold text-white">About</p>
                <p>Far far away, behind the word mountains,<br/>far from the countries Vokalia and Consonantia,<br/> there live the blind texts.</p>
                <div className='flex gap-4 text-3xl'>
                   <a href=""><FaInstagram></FaInstagram></a>
                    <a href=""><FaFacebook></FaFacebook></a>
                    <a href=""><FaTwitter></FaTwitter></a>
                </div>
            </div>
            <div>
                <span className="footer-title">Employers</span>
                <Link className="link link-hover">How it works</Link>
                <Link className="link link-hover">Register</Link>
                <Link className="link link-hover">Post a Job</Link>
                <Link className="link link-hover">Advance Skill Search</Link>
                <Link className="link link-hover">Recruiting Service</Link>
                <Link className="link link-hover">Blog</Link>
                <Link className="link link-hover">Faq</Link>
            </div>
            <div>
                <span className="footer-title">Workers</span>
                <Link className="link link-hover">Register</Link>
                <Link className="link link-hover">Post Your Skills</Link>
                <Link className="link link-hover">Job Search</Link>
                <Link className="link link-hover">Emploer Search</Link>
            </div>
            <div>
                <span className="footer-title">Have a Questions?</span>
                <p className="flex gap-2"><span className='text-lg'><MdLocationOn></MdLocationOn></span> 203 Fake St. Mountain View,<br/> San Francisco, California,<br/> USA</p>
                <Link className="link link-hover flex gap-2"><span className='text-lg'><IoMdCall></IoMdCall></span>	+2 392 3929 210</Link>
                <Link className="link link-hover flex gap-2"><span className='text-lg'><MdOutlineEmail></MdOutlineEmail></span> info@yourdomain.com</Link>
            </div>
        </div>
            <div className="footer items-center justify-center p-4 bg-slate-800 text-white">
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;