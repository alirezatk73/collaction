import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  // Fetch user informations
  fetchUsers: null,
  // The operation has started and is loading
  fetchUsersLoading: null,
  // User informations were successfully fetched
  fetchUsersSuccess: ["users"],
  // An error occurred
  fetchUsersFailure: ["errorMessage"],
});

export const UsersTypes = Types;
export default Creators;
