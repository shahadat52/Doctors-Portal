import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-gray-200 rounded-md">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard/myAppointments">My Appointments</Link></li>
                        <li><Link to="/dashboard">All Doctors</Link></li>
                        <li><Link to="/dashboard">All Patience</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;