import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import surfboards from './reducers/Surfboards'

const reducers = combineReducers({
  surfboards
})

const middleware = [thunk]; //Where we keep all our middlewares.. ex. redux-saga ect.

const store = createStore(
  reducers,  //all our reducers from combine reducers
  composeWithDevTools(
    applyMiddleware(...middleware)   //this allows the redux store to access to thunk
  )
)

export default store;