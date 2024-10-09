import {
  RETRIEVE_QUESTIONS,
  ADD_ANSWER_QUESTION,
  ADD_QUESTION,
} from "../actions/questionActions";

export function questions(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.qid]: action.question,
      };
    case ADD_ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(
              action.authedUser
            ),
          },
        },
      };
    default:
      return state;
  }
}
