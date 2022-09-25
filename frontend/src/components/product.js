
import {
    Stack,
    Button, 
    Card

} from 'react-bootstrap';

function Product({name, description, price, url }) {
  return (
    <Card style={{ width: '15rem' }}>
        <Card.Img 
            variant="top" 
            src={url}
            style={{
                maxHeight : "13rem",
                // maxWidth : "10rem"
            }}
        />
      <Stack className='text-center'> 
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Card.Text className='fw-bold'>
          ${price}
        </Card.Text>
        <Button variant="outline-primary "> Add Cart</Button>
      </Card.Body>
      </Stack>
    </Card>
  );
}

export default Product;