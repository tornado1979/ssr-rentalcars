import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../../client/combinedReducers'
import loger from '../../client/middlewares/loger'

export default () => {
  const middlewares = [thunk, loger]
  const store = createStore(reducers, {}, applyMiddleware(...middlewares))
  return store
}
