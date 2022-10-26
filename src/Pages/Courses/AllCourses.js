import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const AllCourses = ({ course }) => {

    const { name, details, photoUrl, price, id } = course;
    console.log(id);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <Card className='mb-3 w-100 mx-auto'>
                            <Card.Img variant="top" src={photoUrl} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {details.slice(0, 250)}
                                </Card.Text>
                                <Card.Text>
                                    <h5> Price:{price}</h5>
                                </Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <Link className='me-3' to={`course-details/${id}`}>
                                        <Button variant="primary">Explore</Button>
                                    </Link>
                                    <Link to={`checkout/${id}`}>
                                        <Button variant="danger">Checkout</Button>
                                    </Link>
                                </div>


                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AllCourses;