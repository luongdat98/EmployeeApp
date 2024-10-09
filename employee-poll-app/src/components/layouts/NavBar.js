import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loggedOutUser } from "../../actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/NavBar.css";


const NavBar = (props) => {
  const navigate = useNavigate()
  const {userLogin} = props;
  const handleLogOut =() =>{
    props.dispatch(loggedOutUser());
    navigate("/login")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand" >Employee Polls</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-item">
              <Link className ="nav-link" to="/add">New</Link>
            </li>
          </ul>
          <div className="user-info">
            <div className="user"><strong>{userLogin.name}</strong></div>
            <button className="logout" onClick={handleLogOut}>LogOut</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({authedUser, users})=>({
    userLogin : users[authedUser]
  }
);

export default connect(mapStateToProps)(NavBar);