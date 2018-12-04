import * as selectors from '../selectors'

describe('selectors', () => {
  let state
  beforeEach(() => {
    state = {
      data: {
        isFetching: false,
        items: [
          { country: 'United Kington' },
          { country: 'Greece' },
          { country: 'Thailand' },
          { country: 'United Kingtom' },
          { country: 'Thaiand' },
        ],
      },
    }
  })

  it('should get the data object from the state', () => {
    expect(selectors.getLocalState(state)).toEqual(state.data)
  })

  it('shoud get the result items from the state', () => {
    expect(selectors.getItems(state)).toEqual(state.data.items)
  })
})
