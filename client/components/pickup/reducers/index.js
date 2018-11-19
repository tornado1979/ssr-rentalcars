import * as type from '../actionCreators/types'

const initState = {
  isFetching: false,
  items: [],
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case type.CLEAR_RESULTS: {
      return {
        ...state,
        isFetching: false,
        items: action.payload,
      }
    }
    case type.REQUEST_DATA: {
      return {
        ...state,
        isFetching: action.payload.isFetching,
      }
    }
    case type.RECEIVE_DATA_SUCCESS: {
      return {
        ...state,
        isFetching: action.payload.isFetching,
        items: action.payload.data.data.results.docs,
      }
    }
    case type.RECEIVE_DATA_FAIL: {
      return {
        ...state,
        isFetching: false,
      }
    }
    default:
      return state
  }
}
