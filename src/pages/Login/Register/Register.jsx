import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
const {createUser} = useContext(AuthContext)
const [success, setSuccess] = useState('')
const[error, setError] = useState('')

const handleRegister = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value
    const  photo = form.photo.value

    // validation
    if(password.length < 6){
        setError('please add at least 6 characters');
        return;
    }
    createUser(email, password)
    .then(result => {
        const createdUser = result.user
        console.log(createdUser);
        setSuccess('User has created successfully')
    })
    .catch(error => {
        console.error(error.message)
        setError(error.message)
    })
}


    return (
       <div className='bg-dark w-50 mx-auto mt-5 my-5' >
         <div className='w-50 mx-auto  py-5  text-white'>
               <h3>Please Register</h3>
       <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Your Name" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required />
  </Form.Group>
  <Form.Text className="text-danger mb-2">
      {error}
      </Form.Text>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
  </Form.Group>

  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" name="accept" label="Accept Terms & Condition" />
  </Form.Group>
  <Button variant="primary" type="submit" className='mb-3'>
    Register
  </Button>
  <br />
  <Form.Text className="text-white">Don't have an account?
      <Link to="/login">  Login</Link>
      </Form.Text>
<br />
  <Form.Text className="text-info">
      {success}
      </Form.Text>
      <br />
      
</Form> 
        </div>
       </div>
    );
};

export default Register;