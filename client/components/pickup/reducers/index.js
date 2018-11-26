import * as type from '../actionCreators/types'

const initState = {
  isFetching: false,
  items: [],
  searchString: '',
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case type.CLEAR_RESULTS: {
      return {
        isFetching: false,
        items: action.payload.items,
        searchString: action.payload.searchString,
      }
    }
    case type.REQUEST_DATA: {
      return {
        ...state,
        ...action.payload,
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
