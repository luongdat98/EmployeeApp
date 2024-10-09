import { connect } from "react-redux";
import ShowQuestionDetail from "./ShowQuestionDetail";

const AnswerList = (props) => {
  return (
    <div>
      <ShowQuestionDetail list={props.list} isAnswered={props.isAnswered}/>
    </div>
  );
};

export default connect()(AnswerList);
