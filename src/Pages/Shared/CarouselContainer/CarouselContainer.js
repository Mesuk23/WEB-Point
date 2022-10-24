import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
                        src={imageone}
                        height={600}
                        alt="First slide"
                    />
                    <Carousel.Caption className='mb-5'>
                        <h2>Learn more to develop you</h2>
                        <p>We will give you best guides for the future to make it bright.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagetwo}
                        height={600}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='mb-5'>
                        <h2>Practice more to get experience.</h2>
                        <p>We will give you 10+ project for your practice to prepare you for future.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={600}
                        src={imagethree}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="mb-5">
                        <h2>Job Hunting Mission</h2>
                        <p>We will prepare you for the job to make you succesfull in this field</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselContainer;