import { createStore, applyMiddleware } from 'redux'
import counterReducer from './reducer'
import thunk from 'redux-thunk'
let store = createStore(counterReducer, applyMiddleware(thunk))

export default store