import { createStore, combineReducers  } from 'redux'
import { deptoFrutasReducer, deptoLacteosReducer} from './Reducers'

const reducers =  combineReducers({

    deptoFrutasReducer,
    deptoLacteosReducer,


});


export const store = createStore(reducers);