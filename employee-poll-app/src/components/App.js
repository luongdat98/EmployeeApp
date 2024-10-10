import { useEffect, useState } from "react";
import { Route, Routes, Navigate  } from "react-router-dom";
import { handleInitialData } from "../actions/sharedActions";
import { connect } from "react-redux";
import NavBar from "./layouts/NavBar";
import LoginPage from "./pages/LoginPage";
import Home from "./Home";
import PollDetail from "./pages/PollDetail";
import AddPoll from "./pages/AddPoll";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "../router/ProtectedRoutes";

const App = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const {isAuthed} = props;
  useEffect(() => {
    if (!dataLoaded) {
      props.dispatch(handleInitialData()).then(() => {
          setDataLoaded(true);
      });
    }
}, [dataLoaded])
  return (
    <div>
      {isAuthed && <NavBar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoutes isAuthed={isAuthed} />}>
          <Route path="/" element={<Home />} />
          <Route path="/questions/:question_id" element={<PollDetail />} />
          <Route path="/add" element={<AddPoll />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

const mapStateToProps = ({authedUser}) => ({
  isAuthed: !!authedUser,
 });

 export default connect(mapStateToProps)(App);
