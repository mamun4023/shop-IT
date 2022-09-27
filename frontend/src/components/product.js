
import {
    Stack,
    Button, 
    Card

} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Product({name, description, price, url }) {
  return (
    <Card style={{ width: '15rem', height : "400px" }}>
        <Card.Img 
            variant="top" 
            src={url}
            style={{
                height : "13rem",
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
        <Stack gap= {2} direction="horizontal"
          style={{
            marginLeft : "15px"
          }}
        > 
          <Button  size="sm"  variant="outline-primary "> Add Cart</Button>
          <Button  size="sm"  variant="outline-primary "> Buy </Button>
          <Link  to= '/view'  className='btn btn-outline-primary btn-sm'> View </Link>
        </Stack>
        
      </Card.Body>
      </Stack>
    </Card>
  );
}

export default Product;