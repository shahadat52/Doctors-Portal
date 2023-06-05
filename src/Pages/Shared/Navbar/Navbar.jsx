import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/Doctor Logo.png'
import { AuthContext } from '../../../Context/AuthContext';
import Swal from "sweetalert2";




const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)


    const handleSignOut = () => {
        LogOut()
            .then(() => {
                Swal.fire("User Log Out", "", "success");
            })
            .catch((error) => { });
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/about">About</Link> </li>
        <li><Link to="/contactUs">Contact Us</Link></li>
        {
            user?.uid ? <>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>

                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} alt='Profile pictures' />

                    </div>
                </div>

                <li onClick={handleSignOut}><Link>SingOut</Link></li>
            </> : <li><Link to="/login">Login</Link></li>
        }
    </>
    return (
        <div>
            <div className="navbar flex justify-between mb-14">
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