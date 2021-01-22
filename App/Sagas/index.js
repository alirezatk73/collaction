import { takeLatest, all } from "redux-saga/effects";
import { UsersTypes } from "App/Stores/Users/Actions";
import { fetchUsers } from "./UsersSaga";

export default function* root() {
  yield all([takeLatest(UsersTypes.FETCH_USERS_LOADING, fetchUsers)]);
}
