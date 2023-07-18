import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaAws } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { Navigate } from "react-router";

const LandingPageNavBar = () => {
    const [doSignup, setDoSignup] = useState(false)
    const [doSignin, setDoSignin] = useState(false)
    // handlers
    const signIn = () => {
        setDoSignin(true)
    }

    const signUp = () => {
        setDoSignup(true)
    }
    
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <FaAws aria-label="AWS" size="32" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/get-started">Help</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="dark" onClick={signIn}>
              Sign In
            </Button>
            <Button variant="primary" onClick={signUp}>
              Sign Up
            </Button>
              {
                  doSignup && <Navigate to='/signup' />
              }
              {
                  doSignin && <Navigate to='/signin' />
              }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }

  export default LandingPageNavBar;