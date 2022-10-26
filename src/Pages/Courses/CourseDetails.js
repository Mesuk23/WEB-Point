import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const course = useLoaderData();
    const { name, details, photoUrl, price, id } = course;
    return (
        <div className='p-3 my-5 container mx-auto text-center'>
            <Card className='w-70'>
                <Card.Img variant="top" src={photoUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Text>
                        <h6>Price: {price}</h6>
                    </Card.Text>


                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;