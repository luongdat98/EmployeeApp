import { connect } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../actions/authActions";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/LoginPage.css";

const LoginPage = (props)=>{
  const {isAuthed} = props;

  const [username, setUsername] = useState("sarahedo");
  const [password, setPassword] = useState("password123");
  const [status, setStatus] = useState(true);
  
  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const clickLogin = (e) =>{
    e.preventDefault();
    props.dispatch(loginUser(username, password));
    setUsername("");
    setPassword("");
    if(isAuthed){
        setStatus(true)
    }
    else{
      setStatus(false)
    }
  };

  if (isAuthed) {
    return <Navigate to={`/`}/>;
  }

   return (
      <div className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input type="text" onChange={changeUsername} className="form-control" data-testid="usernam-testing" id="floatingInput" placeholder="Username" defaultValue="sarahedo"/>
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input type="password" onChange={changePassword} class="form-control" data-testid="password-testing" id="floatingPassword" placeholder="Password" defaultValue="password123"/>
            <label for="floatingPassword">Password</label>
          </div>
          {!status && !username && <div className="error" data-testid="error-testing">The authentication was not successful!</div>}
          <button onClick={clickLogin} data-testid="button-testing" className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </div>
    );
}
const mapStateToProps =({authedUser}) =>({
   isAuthed : !(authedUser === null)
 }
)
export default connect(mapStateToProps)(LoginPage);