import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { addAnswers } from "../../actions/questionActions";
import { checkValue } from "../../Helper/helpers";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/PollDetail.css";
import NotFound from "./NotFound";

const PollDetail = (props) => {
  const { isAuthed, questions, users, authedUser, dispatch } = props;
  const questionId = useParams().question_id;
  const question = Object.values(questions).filter((q) => {
    return q.id === questionId;
  });
  let voted = 0;

  if (question === null || question === undefined || question.length === 0) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  voted =
  question[0].optionOne.votes.includes(authedUser) ||
  question[0].optionTwo.votes.includes(authedUser);

  const answerUser = answerVote(question, authedUser)

  if (!isAuthed) {
    return <Navigate to={`/login`} />;
  }

  const author = Object.values(users).filter(
    (user) => user.id === question[0].author
  );

const handleSelect = (e) =>{
    e.preventDefault();
    dispatch(addAnswers(question[0].id, e.currentTarget.value));
}

  return (
    <div className="poll-block">
      <h3>Employee Poll by {question[0].author}</h3>
      <img src={author[0].avatarURL} className="avatar" alt="profile"></img>
      <h3 className="question-title">Would You Rather</h3>
       <div className="btn-block">
        <button className="btn btn-outline-primary" onClick={(e)=>{handleSelect(e)}} value="optionOne">
            <p>{question[0].optionOne.text}</p>
           {!voted && <p>Click</p>}
        </button>
        <button className="btn btn-outline-primary" onClick={handleSelect} value="optionTwo" >
            <p>{question[0].optionTwo.text}</p>
            {!voted && <p>Click</p>}
        </button>
       </div>

       {answerUser && <p className=""><strong>Your answer :</strong> {answerUser}</p>}
        {voted && <div>
            <h3>Status:</h3>
            <div> <strong>{question[0].optionOne.text}</strong> have been voted: {question[0].optionOne.votes.length} 
            ({question[0].optionOne.votes.length/(question[0].optionOne.votes.length + question[0].optionTwo.votes.length)*100}%)</div>
            <div>  <strong>{question[0].optionTwo.text}</strong> have been voted: {question[0].optionTwo.votes.length}
            ({question[0].optionTwo.votes.length/(question[0].optionOne.votes.length + question[0].optionTwo.votes.length)*100}%)
            </div>
          </div>}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  isAuthed: !(authedUser === null),
  questions,
  users,
  authedUser,
});

function answerVote(question, id){
  if(checkValue(question) && question[0].optionOne.votes.includes(id) ){
    return question[0].optionOne.text
  };
  if(checkValue(question) && question[0].optionTwo.votes.includes(id) ){
    return question[0].optionTwo.text
  }
  return null;
}
export default connect(mapStateToProps)(PollDetail);
