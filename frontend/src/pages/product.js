import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Row, Col, Container} from 'react-bootstrap';
import {FetchSingleProduct} from '../redux/product/other';

export default function Product(){
    const {id} = useParams();
    const [product, setProduct] = useState([])

    const SingleProduct =(id)=>{
        FetchSingleProduct(id)
            .then((res)=>{
                const response = res.data;
                setProduct(response)
            })
    }

    useEffect(()=>{
        SingleProduct(id);
    }, [])

    console.log(product)
    return( 
        <Container>
            <Row>
                <Col>
                    Images
                </Col>
                <Col>
                    Detail
                </Col>
            </Row> 
        </Container>
    )
}