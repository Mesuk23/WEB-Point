import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <h1>Page Not Found</h1>
            <h4>Please type right URL.</h4>
            <p>Want to go Homepage? <Link to="/">Click here</Link></p>
        </div>
    );
};

export default NotFound;