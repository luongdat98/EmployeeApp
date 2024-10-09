import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Leaderboard.css";

const LeaderboardPage = (props) => {
  const { isAuthed, users } = props;
  if (!isAuthed) {
    return <Navigate to={`/login`} />;
  }

const sortedUser = Object.values(users).sort((a,b)=>(
  ((Object.keys(b.answers).length) +b.questions.length )- ((Object.keys(a.answers).length) +a.questions.length )));
  return (
    <div>
      <h2 className="title">Leader Board</h2>
      <table className="table">
      <thead>
        <tr>
          <th scope="col">User</th>
          <th scope="col">Answered</th>
          <th scope="col">Created</th>
        </tr>
      </thead>
      <tbody>
      {Object.values(sortedUser).map((user)=>(
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{Object.keys(user.answers).length}</td>
            <td>{user.questions.length}</td>
        </tr>
      ))}
      </tbody>
    </table>
    </div>
  );
};
const mapStateToProps = ({ authedUser, users }) => ({
  isAuthed: !(authedUser === null),
  users,
});
export default connect(mapStateToProps)(LeaderboardPage);
