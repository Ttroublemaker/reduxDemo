import { createStore, applyMiddleware } from 'redux'
import counterReducer from './reducer'
// redux-thunk支持异步
import thunk from 'redux-thunk'
let store = createStore(counterReducer, applyMiddleware(thunk))

export default store