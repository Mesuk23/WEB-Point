import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../Context/ContextProvider';

const Login = () => {
    const { handleLogin } = useContext(authContext);
    const navigate = useNavigate();

    const [error, setError] = useState(false);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const handleLoginFrom = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        handleLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })



    }
    return (
        <div>
            <Form onSubmit={handleLoginFrom} className=' w-50 mx-auto mt-5'>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text>
                    {
                        error && <p className='text-danger'>{error}</p>
                    }
                </Form.Text>

                <Form.Group className="mb-3">
                    <Form.Text>
                        New to this website ? Please <Link to="/register">Register</Link>
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;