import React,{useState} from 'react';
import {
    Container,
    Button,
    Form,
    Navbar,
    Stack,
    Badge,
} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import LoginModal from '../sections/header/login';
import SignUpModal from '../sections/header/signup';


export default function NavbarComponent() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseSignupModal = () => setShowSignupModal(false);
  const handleShowSignupModal = () => setShowSignupModal(true);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img 
            src = "https://images-platform.99static.com/WtpSx6VjOjXMAVaZGaIpEL6XP20=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/89/89005/attachment_89005369" 
            style={{
              height: "80px"
            }}  
          />
        </Navbar.Brand>
            <div
                style={{ margin : "auto"}}
                className = ""
            >
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search Product"
                    className="me-2"
                    aria-label="Search"
                    style={{minWidth : "100%"}}
                    />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </div>
                
                <Stack
                   direction="horizontal"
                   gap={2}
                > 
                `    <Link 
                      className='btn btn-primary'
                      to= "/cart"
                    >
                        Cart <Badge bg="secondary"> 0 </Badge>
                        <span className="visually-hidden">unread messages</span>
                    </Link>
                    <Button onClick={handleShowSignupModal} > SignUp</Button>
                    <Button onClick={handleShowLoginModal} > Login</Button>
                    
                    <LoginModal 
                      show = {showLoginModal}
                      handleShow = {handleShowLoginModal}
                      handleClose = {handleCloseLoginModal}
                    />
                     <SignUpModal 
                      show = {showSignupModal}
                      handleShow = {handleShowSignupModal}
                      handleClose = {handleCloseSignupModal}
                    />

                </Stack>
      </Container>
    </Navbar>
  );
}