import * as Types from './type';


const initialState = {
    products : [],
    loading : false,
    errors : ""
}


const Reducer = (state = initialState, action)=>{
    switch(action.type){
        case Types.ALL_PRODUCT_REQUEST:
            return{
                ...state,
                loading : true
            }
        case Types.ALL_PRODUCT_SUCCESS:
            return{
                ...state,
                products : action.payload,
                loading : false,
            }

        case Types.ALL_PRODUCT_FAILED:
            return{
                ...state,
                loading : false,
                errors : action.payload
            }

        default:
            return state
    }
}


export default Reducer;