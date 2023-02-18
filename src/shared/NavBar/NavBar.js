import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [btnState, setBtnState] = useState();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const handleBtnClick = () => {
        setBtnState(btnState => !btnState);
    }

    const btnToggle = btnState ? 'Job Poster' : 'Job Seeker';

    const menuContent = <React.Fragment>
        <li className='transition-colors ease-in-out hover:text-red-400 duration-300'><Link to="/">Home</Link></li>
        <li className='transition-colors ease-in-out hover:text-red-400 duration-300'><Link to="/about">About</Link></li>
        <li className='transition-colors ease-in-out hover:text-red-400 duration-300'><Link to="/contactUs">Contact Us</Link></li>
        <div className="form-control w-full sm:flex md:hidden">
            <label className="cursor-pointer label">
                <span className="label-text font-medium text-primary">{btnToggle}</span>
                <input onClick={handleBtnClick} type="checkbox" className="toggle toggle-primary" />
            </label>
        </div>
        {
            user?.uid ? <li className='btn btn-primary sm:flex md:hidden'><Link onClick={handleLogOut}>Log Out</Link></li>
                :
                <li className='btn btn-primary sm:flex md:hidden'><Link to="/login">Login</Link></li>
        }
    </React.Fragment>
    return (
        <div className='shadow-lg bg-slate-300'>
            <div className="navbar justify-between max-w-[1440px] mx-auto px-5">
                <div className="navbar-start">
                    <Link to="/" className="normal-case text-xl text-red-400 font-bold"><span className='text-primary'>JOB</span>Portal</Link>
                </div>
                <div className="navbar-start hidden md:flex">
                    <ul className="menu-horizontal gap-6 rounded-lg font-semibold text-primary text-lg pr-4">
                        {menuContent}
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content dropdown-left mt-3 p-2 shadow bg-base-100 block w-[150px]">
                        {menuContent}
                    </ul>
                </div>
                <div className="form-control w-full md:flex hidden">
                    <label className="cursor-pointer label">
                        <span className="label-text font-medium text-primary">{btnToggle}</span>
                        <input onClick={handleBtnClick} type="checkbox" className="toggle toggle-primary" />
                    </label>
                </div>
                {
                    user?.uid ? <li className='btn btn-primary md:flex hidden'><Link onClick={handleLogOut}>Log Out</Link></li>
                        :
                        <li className='btn btn-primary md:flex hidden'><Link to="/login">Login</Link></li>
                }
            </div>
        </div>
    );
};

export default NavBar;