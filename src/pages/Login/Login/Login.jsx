import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
            <div className='bg-dark w-50 mx-auto mt-5 my-5' >
                <div className='w-50 mx-auto  py-5  text-white'>
                <h3 className='fs-3'>Please Login</h3>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      
      <Button variant="primary" type="submit" className='mb-3'>
        Login
      </Button>
      <br />
      <Form.Text className="text-white">Don't have an account?
          <Link to="/register"> Register</Link>
          </Form.Text>

      <Form.Text className="text-success">
          
          </Form.Text>
          <Form.Text className="text-danger">
          
          </Form.Text>
    </Form> 
                </div>
            </div>
       
    );
};

export default Login;