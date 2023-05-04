import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <Container className='bg-dark text-white'>
      <Row>
        <Col lg={3} className='mb-3'>
         <h4 className="text-white mt-3">Food<span className='text-danger'>Hut</span></h4>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Reservation</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            </Col>
        <Col lg={3} className='mb-3'>
           <h4 className="text-white mt-3">Contact</h4>
           <li>123 Street, New York, USA </li>
           <li>+012 345 67890</li>
           <li>mail@domain.com</li>
           <li></li>
            </Col>
        <Col lg={3} className='mb-3'>
            <h4 className="text-white mt-3">Opening</h4>
            <li>Monday - Saturday</li>
            <li>09AM - 09Pm</li>
            <li>Sunday</li>
            <li>10AM - 8PM</li>
        </Col>
        <Col lg={3} className='mb-3'>
<h4 className="text-white mt-3">Newsletter</h4>
<h6 className='text-white mb-3'>SignUp for getting update everyday</h6>
<div className="input-group mb-3">
  <input type="email" class="form-control" placeholder="Your Email" aria-label="email" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <span class="input-group-text" id="signup">SIGNUP</span>
  </div>
</div>
        </Col>
      </Row>
      
    </Container>

        </div>
    );
};

export default Footer;