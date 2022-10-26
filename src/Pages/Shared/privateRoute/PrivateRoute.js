import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/ContextProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    console.log(user);
    const location = useLocation();


    if (loading) {
        return <Spinner className='m-5' animation="border" variant="success" />
    }
    if (user && user.uid) {
        return children;
    } else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;