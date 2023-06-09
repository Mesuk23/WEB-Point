import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Context/ContextProvider';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth();
const Register = () => {
    const { createUser } = useContext(authContext)
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const registerUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error))


    }
    // Google handler 
    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))

    }

    // Github handler
    const handleFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <Form onSubmit={registerUser} className=' w-50 mx-auto mt-5'>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Text>
                        Already have a account? please <Link to="/login">Log in</Link>
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-3'>
                    Register
                </Button> <br />
                <Button onClick={handleGoogle} className='me-3' variant='outline-success' >
                    Sign in with Google <FaGoogle />
                </Button>
                <Button onClick={handleFacebook} className='me-3' variant='outline-primary' >
                    Sign in with Facebook <FaFacebook />
                </Button>
            </Form>

        </div>
    );
};

export default Register;