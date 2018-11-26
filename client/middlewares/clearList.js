import * as types from '../components/pickup/actionCreators/types'

export default ({ getState }) => next => action => {
  const state = getState()
  const {
    searchString,
  } = state.data

  // if searchInput is empty or there is only 1 char,
  // i permit all actions except 'RECEIVE_DATA_SUCCESS'
  if ((!searchString || searchString.length === 1) && action.type !== types.RECEIVE_DATA_SUCCESS) {
    next(action)
  } else if (searchString && searchString.length > 1) {
    // if the user typed more  > 1 char, i permit all actions
    next(action)
  }
}
