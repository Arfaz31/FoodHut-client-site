import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider from './../../assets/slider/slider-01.jpg'
import sliderTwo from './../../assets/slider/slider-02.jpg'
import sliderThree from './../../assets/slider/slider-03.jpg'
import "./Home.css"

const Home = () => {
    return (
        <div>
            <div>
            <Carousel className='position-relative'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider}
          alt="First slide"
        />
        <Carousel.Caption className='position-absolute bottom-50'>
          <h3 className='fw-bolder fs-1  lh-base  '>Welcome to <br />
          Food<span className='text-danger'>Hut</span> Restaurant</h3>
          <p className='fs-5 fw-bolder'>Taste your favourite dish from our Restaurant. <br />
          It's taste will always remind you of us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderTwo}
          alt="Second slide"
        />
 <Carousel.Caption className='position-absolute bottom-50'>
          <h3 className='fw-bolder fs-1  lh-base '>Welcome to <br />
          Food<span className='text-danger'>Hut</span> Restaurant</h3>
          <p className='fs-5 fw-bolder'>Taste your favourite dish from our Restaurant. <br />
          It's taste will always remind you of us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderThree}
          alt="Third slide"
        />
 <Carousel.Caption className='position-absolute bottom-50'>
          <h3 className='fw-bolder fs-1  lh-base '>Welcome to <br />
          Food<span className='text-danger'>Hut</span> Restaurant</h3>
          <p className='fs-5 fw-bolder'>Taste your favourite dish from our Restaurant. <br />
          It's taste will always remind you of us.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
              
              <section>

              </section>
        </div>
    );
};

export default Home;