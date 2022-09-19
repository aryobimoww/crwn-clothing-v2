import { UserData } from "../../utils/firebase/firebase";
import { AnyAction } from "redux";

import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  signUpFailed,
} from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};
const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }
  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  if (
    signOutFailed.match(action) ||
    signInFailure.match(action) ||
    signUpFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
};
// switch (type) {
//   case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
//     return {
//       ...state,
//       currentUser: payload,
//     };
//   case USER_ACTION_TYPE.SIGN_IN_FAILURE:
//     return {
//       ...state,
//       error: payload,
//     };
//   case USER_ACTION_TYPE.SIGN_UP_FAILURE:
//     return {
//       ...state,
//       error: payload,
//     };

//   case USER_ACTION_TYPE.SIGN_OUT_FAILURE:
//     return {
//       ...state,
//       error: payload,
//     };
//   case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
//     return {
//       ...state,
//       currentUser: null,
//     };
