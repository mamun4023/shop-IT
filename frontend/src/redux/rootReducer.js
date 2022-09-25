import {combineReducers} from 'redux'
import AllProducts from './product/allProduct/reducer';

const rootReducer = combineReducers({
    Products : AllProducts
})


export default rootReducer;