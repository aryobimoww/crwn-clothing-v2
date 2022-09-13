import { USER_ACTION_TYPE } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoding: false,
  error: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  // console.log("dispatched");
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPE.SIGN_IN_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case USER_ACTION_TYPE.SIGN_UP_FAILURE:
      return {
        ...state,
        error: payload,
      };

    case USER_ACTION_TYPE.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};
