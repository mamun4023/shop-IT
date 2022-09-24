

import {
    Container,
    Button,
    Form,
    Navbar,
} from 'react-bootstrap';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Shop IT</Navbar.Brand>
            <div
                style={{ margin : "auto"}}
            >
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search Product"
                    className="me-2"
                    aria-label="Search"
                    style={{minWidth : "400px"}}
                    />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </div>
                 <Button > SignUp</Button>
                <Button  className='m-1'> Login</Button>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;