import { INITIAL_STATE } from "./InitialState";
import { createReducer } from "reduxsauce";
import { UsersTypes } from "./Actions";

export const fetchUsersLoading = (state) => ({
  ...state,
  usersIsLoading: true,
  usersErrorMessage: null,
});

export const fetchUsersSuccess = (state, { users }) => ({
  ...state,
  users,
  usersIsLoading: false,
  usersErrorMessage: null,
});

export const fetchUsersFailure = (state, { errorMessage }) => ({
  ...state,
  users: [],
  usersIsLoading: false,
  usersErrorMessage: errorMessage,
});

export const reducer = createReducer(INITIAL_STATE, {
  [UsersTypes.FETCH_USERS_LOADING]: fetchUsersLoading,
  [UsersTypes.FETCH_USERS_SUCCESS]: fetchUsersSuccess,
  [UsersTypes.FETCH_USERS_FAILURE]: fetchUsersFailure,
});
