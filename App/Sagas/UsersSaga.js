import { put, call } from "redux-saga/effects";
import UserActions from "../Stores/Users/Actions";
import { userService } from "../Services/UserService";

export function* fetchUsers() {
  yield put(UserActions.fetchUsersLoading());

  // Fetch user informations from an API
  const users = yield call(userService.fetchUsers);
  if (users) {
    yield put(UserActions.fetchUsersSuccess(users));
  } else {
    yield put(
      UserActions.fetchUsersFailure(
        "There was an error while fetching user informations."
      )
    );
  }
}
