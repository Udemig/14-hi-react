import ACTIONS from "../actions/action-types";

const initialState = {
  isLoading: true,
  error: null,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.BASKET_LOADING:
      return { ...state, isLoading: true };

    case ACTIONS.BASKET_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ACTIONS.BASKET_SUCCESS:
      return { ...state, isLoading: false, error: null, basket: action.payload };

    default:
      return state;
  }
};

export default basketReducer;
