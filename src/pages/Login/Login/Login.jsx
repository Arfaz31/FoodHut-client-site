import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGooglePlus, FaGithub} from 'react-icons/fa';


const Login = () => {
   
    const {signIn, handleGoogleSignIn, handleGitHubSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const [success, setSuccess] = useState('')
    const[error, setError] = useState('')
    const handleLogIn = event =>{
        event.preventDefault()
        setSuccess('')
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value

    
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser);
            setSuccess('user login is successful')
            navigate('/')

        })
        .catch(error =>{
            console.error(error.message)
            setError(error.message)
        })

    }

    const handleGoogleSign = () => {
        handleGoogleSignIn()
          .then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log("error massage", error.massage);
          });
      };
    
      

      const handleGitHubSign = () => {
        handleGitHubSignIn()
          .then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log("error massage", error.massage);
          });
      };

    return (
            <div className='bg-dark w-50 mx-auto mt-5 my-5' >
                <div className='w-50 mx-auto  py-5  text-white'>
                <h3 className='fs-3'>Please Login</h3>
           <Form onSubmit={handleLogIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      
      <Button variant="danger" type="submit" className='mb-3'>
        Login
      </Button>
      <br />
      
     <div className='d-flex mb-3'>
          
          <Button onClick={handleGoogleSign} variant="danger" type="submit" className='me-3'>
            <FaGooglePlus/>
          </Button>
            
          <Button onClick={handleGitHubSign} variant="danger" type="submit" className=''>
           <FaGithub/>
          </Button>
         </div>

      <Form.Text className="text-danger">
          {error}
          </Form.Text>
          <Form.Text className="text-info">
          {success}
          </Form.Text>
          <br />
      <Form.Text className="text-white">Don't have an account?
          <Link to="/register"> Register</Link>
          </Form.Text>

      
    </Form> 
                </div>
            </div>
       
    );
};

export default Login;






 

