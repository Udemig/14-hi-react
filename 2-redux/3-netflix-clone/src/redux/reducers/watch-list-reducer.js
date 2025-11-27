import ACTIONS from "../actions/actionTypes";

const initialState = {
  loading: true,
  error: null,
  watchlist: [],
};

const watchListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_LIST:
      const updatedList = state.watchlist.concat(action.payload);
      return { ...state, watchlist: updatedList };

    case ACTIONS.LIST_LOADING:
      return { ...state, loading: true };

    case ACTIONS.LIST_ERROR:
      return { ...state, loading: false, error: action.payload };

    case ACTIONS.LIST_SUCCESS:
      return { ...state, loading: false, error: null, watchlist: action.payload };

    default:
      return state;
  }
};

export default watchListReducer;
