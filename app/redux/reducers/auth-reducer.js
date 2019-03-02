import { AUTH_SET_DATA } from "./../actions/auth-actions";
const initialState = {
  token: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SET_DATA:
      return { ...state, token: payload };

    default:
      return state;
  }
};
