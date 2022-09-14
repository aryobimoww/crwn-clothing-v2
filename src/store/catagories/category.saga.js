import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { fetchCategorySuccess, fetchCategoryFailed } from "./category.action";

import { CATEGORIES_ACTION_TYPE } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categoryArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategorySuccess(categoryArray));
  } catch (error) {
    yield put(fetchCategoryFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
