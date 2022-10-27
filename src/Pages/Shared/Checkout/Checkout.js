import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { authContext } from '../Context/ContextProvider';

const Checkout = () => {
    const course = useLoaderData();
    const { user } = useContext(authContext);
    const { name, price } = course;
    return (
        <div className='p-3 my-5 container mx-auto text-center'>
            <Card className='w-70 text-dark'>
                {/* <Card.Img variant="top" src={photoUrl} /> */}
                <Card.Body>
                    <Card.Title> <h2>Get premium access</h2> </Card.Title> <hr />
                    <Card.Text>
                        <h4>Course Name: {name}</h4>
                        <p>User Name: {user.displayName}</p>
                        <p>User Email: {user.email}</p>

                    </Card.Text>
                    <Card.Text>
                        <h3>Price: {price}</h3>
                    </Card.Text>
                    <Button variant="danger">Order Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkout;