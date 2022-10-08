import axios from 'axios'
import { URL } from '../../config';

export const FetchSingleProduct = (id)=>{
    return axios.get(`${URL}/product/${id}`)
}

 