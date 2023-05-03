import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaUtensils, FaSignInAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
           

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className=' d-flex  align-items-center ms-2 fw-bolder fs-1' ><FaUtensils/> <span className="ms-3 ">Food<span className='text-danger'>Hut</span></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto px-4">
            <NavLink className={({ isActive }) => isActive ? "text-white  text-decoration-none me-5 fw-bolder" : "text-danger text-decoration-none me-4 fw-bolder"}
            to="/"
            >Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-white  text-decoration-none fw-bolder" : "text-danger text-decoration-none me-5 fw-bolder"}
            to="/blog"
            >Blog</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-white ms-3 text-decoration-none  fw-bolder" : "text-danger text-decoration-none  fw-bolder"}
            to="/login"
            >Login <FaSignInAlt/></NavLink>
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;