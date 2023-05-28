import React, { useContext } from 'react';
import { context } from '../AuthProvider/Authcontexts';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user,loading } = useContext(context);
    if (loading) {
        return <div className='h-screen flex items-center justify-center'>
            <progress className="progress w-56 "></progress>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate to="/signin" state={{ from: location }} replace />
};

export default PrivateRoute;