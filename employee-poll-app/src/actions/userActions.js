export const RETRIEVE_USERS = "RETRIEVE_USERS";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";

export function fetchUsers(users) {
  return {
    type: RETRIEVE_USERS,
    users,
  };
}

export function addAnswerUser(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_USER,
    authedUser,
    qid,
    answer,
  };
}

export function addQuestionUser(authedUser, question) {
  return {
    type: ADD_QUESTION_USER,
    authedUser,
    qid: question.id,
    question,
  };
}
