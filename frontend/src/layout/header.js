import {
    Container,
    Button,
    Form,
    Navbar,
    Stack,
    Badge,
} from 'react-bootstrap';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Shop IT</Navbar.Brand>
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
                `    <Button variant="primary">
                        Cart <Badge bg="secondary"> 0 </Badge>
                        <span className="visually-hidden">unread messages</span>
                    </Button>
                    <Button > SignUp</Button>
                    <Button > Login</Button>`
                </Stack>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;