import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import AnswerList from "./pages/AnswerList";
import { useBoolean } from "@fluentui/react-hooks";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = (props) => {
  const { isAuthed, questions, authedUser } = props;
  const [showAnswe, {toggle :toggleshowAnswe}] = useBoolean(false);

  const unanswered = Object.values(questions).filter(
    (question) =>{
      return (
      !question.optionOne.votes.includes(authedUser) &&
      !question.optionTwo.votes.includes(authedUser))
    }
  );

  const answered = Object.values(questions).filter(
    (question) =>
      question.optionOne.votes.includes(authedUser)||
      question.optionTwo.votes.includes(authedUser) 
  );

  const ClickDisplayedAnswed = () =>{
    toggleshowAnswe()
  }

  if (!isAuthed) {
    return <Navigate to={`/login`} />;
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={ClickDisplayedAnswed}>{showAnswe? "Hide" : "Show"} Answered</button>
      {!showAnswe && <AnswerList list={unanswered} isAnswered={false} />}
      {showAnswe && <AnswerList list={answered} isAnswered={true} />}
    </div>
  );
};
const mapStateToProps = ({ authedUser, questions, users }) => ({
  isAuthed: !(authedUser === null),
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
  authedUser,
});
export default connect(mapStateToProps)(Home);

