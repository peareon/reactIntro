import {createStore} from 'redux'
import rootReducer from '../redurcers';

const store = createStore(rootReducer);

export default store;