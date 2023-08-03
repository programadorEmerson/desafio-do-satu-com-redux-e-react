import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'

import { todoReducer } from './reduces/todo.reduce'

const rootReducer = combineReducers({ todoReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store

