import { _saveQuestionAnswer, _saveQuestion } from "../_DATA";
import { addAnswerUser, addQuestionUser } from "./userActions";
export const RETRIEVE_QUESTIONS = "RETRIEVE_QUESTIONS";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function fetchQuestions(questions) {
  return {
    type: RETRIEVE_QUESTIONS,
    questions,
  };
}

export function addAnswer(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    qid: question.id,
    question,
  };
}
export function addAnswers(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(addAnswerUser(authedUser, qid, answer));
      dispatch(addAnswer(authedUser, qid, answer));
    });
  };
}
export function addQuestions(authedUser, firstOption, secondOption) {
  return (dispatch) => {
    const question = {
      author: authedUser,
      optionOneText: firstOption,
      optionTwoText: secondOption,
    };
    return _saveQuestion(question).then((questionFormat) => {
      dispatch(addQuestion(questionFormat));
      dispatch(addQuestionUser(authedUser, questionFormat));
    });
  };
}
