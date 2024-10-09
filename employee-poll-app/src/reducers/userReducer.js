import {
  RETRIEVE_USERS,
  ADD_ANSWER_USER,
  ADD_QUESTION_USER,
} from "../actions/userActions";

export function users(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat(action.qid),
        },
      };
    case ADD_ANSWER_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
