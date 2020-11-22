export const testAction = 'TEST_ACTION';

const initialState = {
  view: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case testAction: {
      return {
        ...state,
        view: action.payload,
      };
    }
    default:
      return state;
  }
}

export default reducer;
