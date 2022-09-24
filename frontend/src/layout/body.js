import {
    Container
} from 'react-bootstrap';

import Product from '../components/product';

function Body(){
    return(
        <Container className='m-4'>
            <Product/>
        </Container>
    )
}

export default Body;