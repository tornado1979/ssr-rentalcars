import * as types from '../actionCreators/types'
import { reducer } from '../reducers'

describe('data reducer ', () => {
  it('should return initial state', () => {
    const initState = {
      isFetching: false,
      items: [],
    }
    expect(reducer(undefined, {})).toEqual(initState)
  })

  it(`update state when action is ${types.REQUEST_DATA}`, () => {
    const state = {
      isFetching: false,
      items: [
        { country: 'United Kington' },
        { country: 'Greece' },
        { country: 'Thailand' },
        { country: 'United Kingtom' },
        { country: 'Thaiand' },
      ],
    }
    const action = {
      payload: {
        isFetching: true,
      },
      type: types.REQUEST_DATA,
    }

    expect(reducer(state, action)).toEqual({
      isFetching: true,
      items: [
        { country: 'United Kington' },
        { country: 'Greece' },
        { country: 'Thailand' },
        { country: 'United Kingtom' },
        { country: 'Thaiand' },
      ],
    })
  })

  it(`update state when action is ${types.RECEIVE_DATA_SUCCESS}`, () => {
    const data = {
      data: {
        results: {
          docs: [
            { country: 'Brazil' },
            { country: 'United Kingdom' },
            { country: 'Greece' },
            { country: 'United States of America' },
            { country: 'Greece' },
          ],
        },
      },
    }
    const action = {
      payload: {
        data,
        isFetching: false,
      },
      type: types.RECEIVE_DATA_SUCCESS,
    }

    expect(reducer(undefined, action)).toEqual({
      isFetching: false,
      items: [
        { country: 'Brazil' },
        { country: 'United Kingdom' },
        { country: 'Greece' },
        { country: 'United States of America' },
        { country: 'Greece' },
      ],
    })
  })
})
