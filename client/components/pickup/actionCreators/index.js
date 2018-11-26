import axios from 'axios'

import * as type from './types'

import { API_SEARCH_ENDPOINT } from '../../../contants'

const clear = (searchString) => {
  return {
    payload: {
      items: [],
      searchString,
    },
    type: type.CLEAR_RESULTS,
  }
}

// action that clears the results list
export const clearResults = (searchString) => {
  return clear(searchString)
}

export const requestData = (searchString) => {
  return {
    payload: {
      isFetching: true,
      searchString,
    },
    type: type.REQUEST_DATA,
  }
}

export const receiveDataSuccess = (data) => {
  return {
    payload: {
      data,
      isFetching: false,
    },
    type: type.RECEIVE_DATA_SUCCESS,
  }
}

export const receiveDataFail = (error) => {
  return {
    payload: {
      error,
      isFetching: false,
    },
    type: type.RECEIVE_DATA_FAIL,
  }
}

export const fetchData = (searchString = 'London') => async (dispatch) => {
  dispatch(requestData(searchString))

  try {
    const res = await axios.get(`${API_SEARCH_ENDPOINT}${searchString}`)

    dispatch(receiveDataSuccess(res))
  } catch (error) {
    console.log(error)
    dispatch(receiveDataFail(error))
  }
}
