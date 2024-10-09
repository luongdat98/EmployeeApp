import { getData } from "../Servers/api";
import { fetchQuestions } from "./questionActions";
import { fetchUsers } from "./userActions";

export function handleInitialData() {
  return async (dispatch) => {
    const { users, questions } = await getData();
    dispatch(fetchUsers(users));
    dispatch(fetchQuestions(questions));
  };
}
