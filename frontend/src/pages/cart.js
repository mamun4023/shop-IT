
import { useState } from 'react';
import {
    Row,
    Col,
    Card,
    Container,
    ListGroup,
    Badge,
    Button,
    Stack,
    Image
} from 'react-bootstrap';


const Data = [
    {
        "id" : "1",
        "name" : "Product name 1",
        "price" : "203.20",
        "image" : "https://images.unsplash.com/photo-1600086827875-a63b01f1335c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    
    },
    {
        "id" : "2",
        "name" : "Product name 2",
        "price" : "203.20",
        "image" : "https://images.unsplash.com/photo-1600086827875-a63b01f1335c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    
    },
    {
        "id" : "3",
        "name" : "Product name 3",
        "price" : "203.20",
        "image" : "https://images.unsplash.com/photo-1600086827875-a63b01f1335c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    
    },
    {
        "id" : "4",
        "name" : "Product name 4",
        "price" : "203.20",
        "image" : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    
    }
]


function Cart(){

    const [cartData, setCartData] = useState(Data)
    return(
        <Container className='m-3'>
            <Row>
                <Col lg = {8}>
                    <Card> 
                        <h3 className='text-center p-2 bg-primary text-white'> MY BAG</h3>

                        {
                            cartData.map(data =>
                                <>
                                    
                                    <Stack direction='vertical' gap={3}>
                                        <Card> 
                                    <Row className='m-2'>
                                     
                                        <Col>
                                          
                                            <Image 
                                                src = {data.image}
                                                style ={{
                                                    maxHeight : "10rem",
                                                    maxWidth : "12rem"
                                                }}
                                            />
                                         
                                        </Col>
                                         <Col>
                                            <h6> {data.name} </h6>
                                            <span > ${data.price}</span>
                                         </Col>
                                         </Row>
                                         </Card>
                                         </Stack>
                                   
                                </>)
                        }

                    </Card>
                </Col>
                <Col lg = {4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">Total </div>
                                <Badge bg="primary" pill> $14.00</Badge>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto"> Sub Total </div>
                                <Badge bg="primary" pill> $14.00 </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto"> Delivery Free </div>
                                <Badge bg="primary" pill> $14.00 </Badge>
                            </ListGroup.Item>
                        </ListGroup>
                        <Button className='my-2'> CHECK OUT</Button>

                        <h4>We Accept : </h4>
                        <Stack direction='horizontal' gap={3}>
                            <img style={{maxHeight : "50px" }} src= "data:image/png;base64,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" />
                             <img style={{maxHeight : "50px" }} src= " data:image/png;base64,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" />
                            <img style={{maxHeight : "50px" }} src= "https://149448277.v2.pressablecdn.com/wp-content/uploads/2022/05/paypal-logo.png" />
                            <img style={{maxHeight : "50px" }} src= "https://mms.businesswire.com/media/20210504005184/en/772916/23/logo-payoneer.jpg" />


                           
                        </Stack>
                    </Card>
                    
                </Col>
            </Row>

            
        
        </Container>
    )
}

export default Cart;