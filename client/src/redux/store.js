import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import redux_thunk from 'redux-thunk'

const middleware = [redux_thunk]

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store