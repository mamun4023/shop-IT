import { useEffect } from 'react';
import {
    Container, Stack
} from 'react-bootstrap';

import Product from '../components/product';
import {useDispatch, useSelector} from 'react-redux';
import {FetchProducts} from '../redux/product/allProduct/action'


function Body(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchProducts())
    },[])

    const {products} = useSelector(state => state.Products) 

    console.log(products)

    return(
        <Container className='m-4'>
            <Stack 
                 direction="horizontal" 
                 gap={3}
                
            > 
                {
                    products.map(data =>
                        <Product  
                            name = {data.name??data.name}
                            description = {data.description??data.description}
                            price = {data.price??data.price}
                            url = {data.images[0]?.url}
                        />
                        )
                }
            </Stack>
        </Container>
    )
}

export default Body;