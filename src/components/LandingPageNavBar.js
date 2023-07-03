import React from 'react';
import { Link } from 'react-router-dom';
import { FaAws } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const LandingPageNavBar = () => {
    const navigate = useNavigate()

    // handlers
    const signIn = () => {
        navigate('/signin')
    }

    const signUp = () => {
        navigate('/signin', { state: 'signUp' })
    }
    
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <FaAws aria-label="AWS" size="32" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="light" onClick={signIn}>
              Sign In
            </Button>
            <Button variant="light" onClick={signUp}>
              Sign Up
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }

  export default LandingPageNavBar;