import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'

import thunk from 'redux-thunk'

import rootReducers from './combinedReducers'
import logger from './middlewares/loger'
import clearList from './middlewares/clearList'

// initial state coming from the server
const initialState = window.INITIAL_STATE

const enhancers = []
const middlewares = [thunk, logger, clearList]


if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
)

const store = createStore(
  rootReducers,
  initialState,
  composedEnhancers,
)

export default store
