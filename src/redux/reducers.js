import { combineReducers } from 'redux';

export const initialFiltersState = {
  filters: {
    nameFilter: '',
    showPiiOnly: false
  }
}

export const filterReducer = (state = initialFiltersState, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return { ...state, filters: action.filters};
    default:
      return state;
  }
};

const reducers = combineReducers({
  filterReducer,
});

export default reducers;