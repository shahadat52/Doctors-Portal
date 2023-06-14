import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useAdmin } from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import DnaLoader from '../Utilities/DnaLoader';

const AdminRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [isAdmin, isLoading] = useAdmin(user?.email)
    const location = useLocation()

    if (isLoading) {
        return <DnaLoader />
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default AdminRoute;