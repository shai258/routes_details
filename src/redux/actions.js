export const setFilters = filters => dispatch =>
  dispatch({
    type: 'SET_FILTERS',
    filters,
});