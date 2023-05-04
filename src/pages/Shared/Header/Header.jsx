import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaUtensils, FaSignInAlt} from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.log(error))
  }
    return (
      <div>
           

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
       <NavLink className={"d-flex  align-items-center ms-2 fw-bolder text-white fs-1 text-decoration-none"}
       >
          <FaUtensils/> <span className="ms-3 ">Food<span className='text-danger'>Hut</span></span>
       </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto px-4">
            <NavLink className={({ isActive }) => isActive ? "text-white  text-decoration-none me-5 fw-bolder" : "text-danger text-decoration-none me-5 fw-bolder"}
            to="/"
            >Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-white  text-decoration-none fw-bolder me-3" : "text-danger text-decoration-none me-3 fw-bolder"}
            to="/blog"
            >Blog</NavLink>
          </Nav>
         <Nav>
         

 {user && <div> <a data-tooltip-id="my-tooltip" data-tooltip-content= {user.displayName}>
                  <img src={user.photoURL} alt="" className="container img-fluid rounded" width="30" height="30"/>
               </a> 
               <Tooltip id="my-tooltip" /></div>}
         
          
          {user?
          <NavLink onClick={handleLogOut} className={({ isActive }) => isActive ? "text-white ms-3 text-decoration-none  fw-bolder" : "text-danger text-decoration-none ms-3  fw-bolder"}
          to=""
          >LogOut <FaSignInAlt/></NavLink> :
          <NavLink className={({ isActive }) => isActive ? "text-white ms-3 text-decoration-none  fw-bolder" : "text-danger text-decoration-none ms-3  fw-bolder"}
          to="/login"
          >Login <FaSignInAlt/></NavLink>

          }
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;