import { createSelector } from 'reselect'

const getLocalState = state => state.data

export const getItems = createSelector(
  getLocalState,
  data => (data && data.items) || [],
)

export const getIsFetching = createSelector(
  getLocalState,
  data => {
    return (data && data.isFetching) || false
  },
)

export const getNoResultsFound = createSelector(
  getItems,
  data => {
    return data.length === 1 && !data.bookingId ? data[0].name && data[0].name : false
  },
)
