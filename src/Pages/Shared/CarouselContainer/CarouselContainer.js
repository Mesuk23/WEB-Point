import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import imageone from '../../Home/img/slide1.jpg'
import imagetwo from '../../Home/img/slide2.jpg'
import imagethree from '../../Home/img/slide3.jpg'

const CarouselContainer = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagetwo}
                        height={600}
                        alt="First slide"
                    />
                    <Carousel.Caption className='mb-5 pb-5'>
                        <h1>Learn more to develop you</h1>
                        <p>We will give you best guides for the future to make it bright.</p>
                        <Link className='mb-5' to="/courses">
                            <Button variant='danger'>Start Now</Button>
                        </Link>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagethree}
                        height={600}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='mb-5 pb-5'>
                        <h1>Practice more to get experience.</h1>
                        <p>We will give you 10+ project for your practice to prepare you for future.</p>
                        <Link className='mb-5' to="/courses">
                            <Button variant='danger'>Start Now</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={600}
                        src={imageone}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="mb-5  pb-5">
                        <h1>Job Hunting Mission</h1>
                        <p>We will prepare you for the job to make you succesfull in this field</p>
                        <Link className='mb-5' to="/courses">
                            <Button variant='danger'>Start Now</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselContainer;