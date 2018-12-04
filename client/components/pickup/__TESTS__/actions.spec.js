import moxios from 'moxios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import * as actions from '../actionCreators'
import * as types from '../actionCreators/types'

describe('Actioncreators test', () => {
  it("should create 'REQUEST_DATA' action", () => {
    expect.assertions(1)
    const action = {
      payload: {
        isFetching: true,
      },
      type: types.REQUEST_DATA,
    }

    expect(actions.requestData()).toEqual(action)
  })

  it("should create 'REQUEST_DATA' & 'RECEIVE_DATA_SUCCESS' on fethData", (done) => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)

    moxios.install()

    const response = {

    }

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        response,
        status: 200,
      })
    })

    const expectedActions = [types.REQUEST_DATA, types.RECEIVE_DATA_SUCCESS]

    const store = mockStore({
      isFetching: false,
      items: [],
    })

    return store.dispatch(actions.fetchData()).then(() => {
      const dispatchedActions = store.getActions()
      const actionTypes = dispatchedActions.map(action => action.type)
      expect(actionTypes).toEqual(expectedActions)
      done()
    })
  })
})
