import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducers/reducer.utils";
import { CATEGORIES_ACTION_TYPE, Category } from "./category.types";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
  Error
>;
// export const setCategories = (categoriesArray) =>
//   createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);

export const fetchCategoryStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)
);

export const fetchCategorySuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(
      CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoryFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error)
);

//redux-thunk
// export const fetchCategoriesAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoryStart());
//     try {
//       const categoryArray = await getCategoriesAndDocuments("categories");
//       dispatch(fetchCategorySuccess(categoryArray));
//     } catch (error) {
//       dispatch(fetchCategoryFailed(error));
//     }
//   };
// };
