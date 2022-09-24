
import {
    Stack,
    Button, 
    Card

} from 'react-bootstrap';

function BasicExample() {
  return (
    <Card style={{ width: '15rem' }}>
        <Card.Img 
            variant="top" 
            src="https://www.gadstyle.com/wp-content/uploads/2022/08/urbanista-los-angeles-solar-powered-active-noise-cancelling-headphones-with-infinite-playtime-1-600x600.webp" 
            style={{
                maxHeight : "13rem",
                // maxWidth : "10rem"
            }}
        />
      <Stack className='text-center'> 
      <Card.Body>
        <Card.Title>Head Phone</Card.Title>
        <Card.Text>
          Better sound quality with noice cancelling feature
        </Card.Text>
        <Card.Text className='fw-bold'>
          $120.00
        </Card.Text>
        <Button variant="outline-primary "> Add Cart</Button>
      </Card.Body>
      </Stack>
    </Card>
  );
}

export default BasicExample;