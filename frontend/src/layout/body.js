import { useEffect } from 'react';
import {
    Container, Spinner, Stack
} from 'react-bootstrap';
import Loader from '../components/loader';
import Product from '../components/product';
import {useDispatch, useSelector} from 'react-redux';
import {FetchProducts} from '../redux/product/allProduct/action'


function Body(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchProducts())
    },[])

    const {products} = useSelector(state => state.Products)

    return(
        <Container className='m-4'>
            {products.length === 0?<Loader/> : 
                <Stack 
                    direction="horizontal" 
                    gap={3}
                    className="d-flex flex-row flex-wrap"
                    
                     
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
            }
        </Container>
    )
}

export default Body;