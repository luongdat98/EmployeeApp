import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/ShowQuestionDetail.css";

const ShowQuestionDetail = (props) => {
  const header = props.isAnswered ? "Answers" : "New Questions";

  return (
    <div>
      <h2 className="title">{header}</h2>
      <div className="card-block">
        {props.list.length === 0 && <div className="not-question">There are no question!</div>}
        {props.list &&
          props.list.map((question, index) => (

            <div key={index} className="card" style={{width: "18rem"}}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>User:</strong> {question.author}</li>
                <li className="list-group-item"><strong>Time:</strong> {new Date(question.timestamp).toLocaleDateString()}</li>
                <li className="list-group-item">
                <Link to={"questions/" + question.id}>
                  <button>Click to show detail</button>
                </Link>
                </li>
              </ul>
            </div>
          ))}
      </div>
      
    </div>
  );
};

export default connect()(ShowQuestionDetail);
