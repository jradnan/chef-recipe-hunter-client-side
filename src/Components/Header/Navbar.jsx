import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }

   
    return (
        <div className="navbar header bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><ActiveLink to={'/'}>Home</ActiveLink></li>
                        <li> <Link>About Us</Link></li>
                        <li><Link>Explore Foods</Link></li>
                        <li><ActiveLink to={'/blog'}>Blog</ActiveLink></li>
                        
                    </ul>
                </div>
                <img src="https://i.ibb.co/gZXLjHq/logo-1.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[18px] text-[#a82d49] font-[600]">
                    <li><ActiveLink to={'/'}>Home</ActiveLink></li>
                    <li> <Link>About Us</Link></li>
                    <li><Link>Explore Foods</Link></li>
                    <li><ActiveLink to={'/blog'}>Blog</ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user && <FontAwesomeIcon className='mr-10 text-[20px] text-[#a82d49]' icon={faUser} />}
                {user ? <Link><button onClick={handleLogOut} className="bg-[#a82d49]   text-[white] btn-outline text-[18px] py-[11px] px-[28px] font-[600]">Logout</button>
                </Link> :
                    <ActiveLink to={'/login'}><button className="bg-[#a82d49]   text-[white] btn-outline text-[18px] py-[11px] px-[28px] font-[600]">Login</button></ActiveLink>}
            </div>
        </div>
    );
};

export default Navbar;