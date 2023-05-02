import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img src="https://i.ibb.co/gZXLjHq/logo-1.png" alt="" />
            </div>
            <div className="flex-none gap-5 text-[18px] text-[#a82d49] font-[600]">
                <Link to={'/'}>Home</Link>
                <Link>About Us</Link>
                <Link>Explore Foods</Link>
                <Link to={'/blog'}>Blog</Link>
                <Link to={'/login'}>Login</Link>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;