import { Category } from "./category.types";
import {
  fetchCategoryFailed,
  fetchCategorySuccess,
  fetchCategoryStart,
} from "./category.action";
import { AnyAction } from "redux";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};
export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
): CategoriesState => {
  if (fetchCategoryStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategorySuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoryFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
  // switch (action.type) {
  //   case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
  //     return { ...state, isLoading: true };
  //   case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
  //     return { ...state, categories: action.payload, isLoading: false };
  //   case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
  //     return { ...state, error: action.payload, isLoading: false };
  //   default:
  //     return state;
};
