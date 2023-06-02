import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './categories/category.saga';
import { userSagas } from './user/user.saga';

export function * rootSaga () {
  // generator function (from es6)-- forms the basis for async-await
  // pause function when they see a particular key (a yield)
  yield all([call(categoriesSaga), call(userSagas)]);
}
