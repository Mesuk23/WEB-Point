import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const CourseDetails = () => {
    const course = useLoaderData();
    const { name, details, photoUrl, price } = course;
    return (
        <div className='p-3 my-5 container mx-auto text-center'>
            <Card className='w-70 text-dark'>
                <Card.Img variant="top" src={photoUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Text>
                        <h6>Price: {price}</h6>
                    </Card.Text>
                    <Button variant="danger">Order Now</Button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;