import { _getQuestions, _getUsers } from "../_DATA";

export async function  getData() {
  try {
    const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
    return {
        users,
        questions,
    };
  } catch (e) {
    console.error("Error fetching initial data: ",e);
  }
}
