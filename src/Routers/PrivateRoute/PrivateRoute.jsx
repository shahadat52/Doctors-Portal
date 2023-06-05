import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import DnaLoader from '../../Utilities/DnaLoader';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
   
    if(loading){
        return <DnaLoader/>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;