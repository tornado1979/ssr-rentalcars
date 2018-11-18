import axios from 'axios'

import * as type from './types'

import { API_SEARCH_ENDPOINT } from '../../../contants'

export const requestData = () => {
  return {
    payload: {
      isFetching: true,
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
  dispatch(requestData())

  try {
    const res = await axios.get(`${API_SEARCH_ENDPOINT}${searchString}`)
    // const data = await response.json()
    dispatch(receiveDataSuccess(res))
  } catch (error) {
    console.log(error)
    dispatch(receiveDataFail(error))
  }
}
