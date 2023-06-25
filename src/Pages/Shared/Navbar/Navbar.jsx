import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/Doctor Logo.png'
import { AuthContext } from '../../../Context/AuthContext';
import Swal from "sweetalert2";




const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false)


    const handleSignOut = () => {
        LogOut()
            .then(() => {
                Swal.fire("User Log Out", "", "success");
            })
            .catch((error) => { });
    }

    const menuItems = <>
        <li><NavLink to="/"
            className={({ isActive }) =>
                isActive
                    ? "font-bold text-lg tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : " tracking-wide text-black  transition-colors duration-200 hover:text-deep-purple-accent-400"
            }
        >Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive
                ? "font-bold text-lg tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                : " tracking-wide text-black  transition-colors duration-200 hover:text-deep-purple-accent-400"
        } to="/appointment">Appointment</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive
                ? "font-bold text-lg tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                : " tracking-wide text-black   transition-colors duration-200 hover:text-deep-purple-accent-400"
        } to="/about">About</NavLink> </li>
        <li><NavLink className={({ isActive }) =>
            isActive
                ? "font-bold text-lg tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                : " tracking-wide text-black  transition-colors duration-200 hover:text-deep-purple-accent-400"
        } to="/contactUs">Contact Us</NavLink></li>
        {
            user?.uid ? <>
                <li><NavLink className={({ isActive }) =>
                    isActive
                        ? "font-bold text-lg tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                        : " tracking-wide text-black  transition-colors duration-200 hover:text-deep-purple-accent-400"
                } to="/reviews">Reviews</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                    isActive
                        ? "font-bold text-lg tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                        : " tracking-wide text-black  transition-colors duration-200 hover:text-deep-purple-accent-400"
                } to="/dashboard">Dashboard</NavLink></li>


                <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} onClick={() => setOpen(!open)} className=" avatar "><div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ">
                        <img src={user.photoURL} alt='Profile pictures' />
                    </div></label>
                    <div tabIndex={0} className="dropdown-content bg-green-300     menu p-2 shadow  rounded-box w-52">
                        <div className="card-body">
                            <li onClick={handleSignOut}><NavLink>SingOut</NavLink></li>
                        </div>
                    </div>
                </div>




            </> : <li><NavLink className={({ isActive }) =>
                isActive
                    ? "font-bold text-lg tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : " tracking-wide text-black  transition-colors duration-200 hover:text-deep-purple-accent-400"
            } to="/login">Login</NavLink></li>
        }
    </>
    return (
        <div className=''>
            <div className="navbar flex justify-between   bg-slate-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                    <Link className="btn btn-ghost normal-case text-xl mt-[-25px]"> Doctors Portal <img src={logo} className='w-20 h-20' alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;