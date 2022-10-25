import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { authContext } from '../Pages/Shared/Context/ContextProvider';

const Main = () => {

    const { user, handleLogout } = useContext(authContext);

    const signOut = () => {
        handleLogout()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <nav>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">WEB Point</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/courses">Courses</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                                <Nav.Link href="/faq">FAQ</Nav.Link>
                            </Nav>
                            <Nav>
                                {
                                    user?.email ? <Nav.Link onClick={signOut}>Sign Out</Nav.Link> :
                                        <>
                                            <Nav.Link href="/login">Sign in</Nav.Link>
                                            <Nav.Link href="/register">Register</Nav.Link>
                                        </>
                                }


                                <Nav.Link eventKey={2} href="#memes">
                                    {user?.email}
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;