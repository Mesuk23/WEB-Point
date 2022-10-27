import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllCourses from './AllCourses';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h1 className='text-center text-secondary mt-3'>My Courses </h1> <hr />
            <div className='mt-5 all-container container'>



                <div className='border-end ' lg='3'>
                    <h2 className='mb-3'>Category</h2>
                    {
                        courses.map(course => <p> <Link to={`course-details/${course.id}`}> {course.name}</Link></p>)
                    }
                </div>
                <div className='courses-container'>
                    {
                        courses.map(course => <AllCourses key={course.id} course={course}></AllCourses>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Courses;