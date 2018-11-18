import { createSelector } from 'reselect'

const getLocalState = state => state.data

export const getItems = createSelector(
  getLocalState,
  data => (data && data.items) || [],
)

export const getIsFetching = createSelector(
  getLocalState,
  data => {
    return data && data.isFetching
  },
)
