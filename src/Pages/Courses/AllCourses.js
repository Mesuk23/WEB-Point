
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { createRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AllCourses = ({ course }) => {
    const ref = createRef();

    const { name, details, photoUrl, price, id } = course;
    console.log(course);
    return (
        <div>


            <Card className='mb-3 w-80 mx-auto text-dark me-0'>

                <Card.Img variant="top" height={200} src={photoUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details.slice(0, 200)} ...<Link to={`course-details/${id}`}>read more</Link>
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
                        <a href='webDev.pdf' download="webDev.pdf">
                            <FaDownload></FaDownload>
                        </a>

                        {/* <div>
            <FaDownload>
                <div className="App">
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                    <div ref={ref}>
                        <h1>Hello CodeSandbox</h1>
                        <h2>Start editing to see some magic happen!</h2>
                    </div>
                </div>
            </FaDownload>
        </div> */}

                    </div>


                </Card.Body>
            </Card>






        </div>
    );
};


export default AllCourses;