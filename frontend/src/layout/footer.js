import {
    Row,
    Col,
    Stack,
    Container

} from 'react-bootstrap';


function Footer(){
    return(
        <Container fluid>
        
            <Row
                className='bg-primary text-white p-5'
                style = {{
                  position : "relative",
                  right : '0',
                  left : "0",
                  bottom : '0'
                }}
            >
                <Col>
                    <Stack gap={2}>
                        <div> Shop IT</div>
                        <div> About Us</div>
                        <div>Contact </div> 
                    </Stack>
                </Col>
                <Col> 
                    <Stack gap={2}>
                        <div> Shop IT</div>
                        <div> About Us</div>
                        <div>Contact </div> 
                    </Stack>
                </Col>
                <Col> 
                    <Stack gap={2}>
                        <div> Shop IT</div>
                        <div> About Us</div>
                        <div>Contact </div> 
                    </Stack>
                </Col>
                <Col> 
                    <Stack gap={2}>
                        <div> Shop IT</div>
                        <div> About Us</div>
                        <div>Contact </div> 
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;