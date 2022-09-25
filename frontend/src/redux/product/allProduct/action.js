import axios from 'axios'
import * as Types from './type';
import { URL } from '../../../config';
const FetchAllProductRequest = ()=>{
    return{
        type : Types.ALL_PRODUCT_REQUEST
    }
}

const FetchAllProductSuccess = (data)=>{
    return{
        type : Types.ALL_PRODUCT_SUCCESS,
        payload : data
    }
}


const FetchAllProductFailed = ()=>{
    return{
        type : Types.ALL_PRODUCT_FAILED
    }
}


export const FetchProducts = (data)=>{
    return (dispatch)=>{
        dispatch(FetchAllProductRequest())
        axios.get(`${URL}/products`)
            .then(res =>{
                let response = res.data.AllProducts
                dispatch(FetchAllProductSuccess(response))
            })
            .catch(err =>{
                dispatch(FetchAllProductFailed(err.response.data))
            })
        
    }
}

 