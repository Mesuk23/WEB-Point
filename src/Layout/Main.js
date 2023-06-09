import React, { useContext, useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { authContext } from '../Pages/Shared/Context/ContextProvider';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {

    const { user, handleLogout } = useContext(authContext);

    // theme 
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

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
                                <Link className='nav-item' to="/">Home</Link>
                                <Link className='nav-item' to="/courses">Courses</Link>
                                <Link className='nav-item' to="/blog">Blog</Link>
                                <Link className='nav-item' to="/faq">FAQ</Link>
                            </Nav>
                            <Nav>
                                {
                                    user?.uid ? <><Link className='nav-item mt-2' onClick={signOut}>Sign Out</Link>
                                        <Nav.Link href="#memes">
                                            {
                                                user?.photoURL ? <><Image data-tip={user.displayName} roundedCircle style={{ height: '30px' }} src={user?.photoURL} alt="" /> <ReactTooltip /></> : <FaUserAlt />

                                            }
                                        </Nav.Link> </> :
                                        <>
                                            <Link className='nav-item mt-2' to="/login">Sign in</Link>
                                            <Link className='nav-item mt-2' to="/register">Register</Link>
                                        </>

                                }

                                <Link style={{ color: '#888888' }} className={`bg-dark nav-item px-2 mt-2 ${theme}`} onClick={toggleTheme}>
                                    {
                                        theme === 'light' ? <span>Dark Theme</span> : <span>Light Theme</span>
                                    }
                                </Link>








                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;