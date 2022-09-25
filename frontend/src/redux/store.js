import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import Reducer from './rootReducer';


const middleware = [thunk];

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(... middleware)))

export default store;
