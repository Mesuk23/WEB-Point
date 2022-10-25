import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllCourses from './AllCourses';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='mt-5'>


            <Container>
                <Row>
                    <Col lg='3'>
                        <h2 className='mb-3'>Category</h2>
                        {
                            courses.map(course => <p>{course.name}</p>)
                        }
                    </Col>
                    <Col lg='9'>
                        {
                            courses.map(course => <AllCourses key={course.id} course={course}></AllCourses>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;