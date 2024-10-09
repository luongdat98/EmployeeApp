import { combineReducers } from "redux";
import authedUser from "./authReducer";
import {users} from "./userReducer";
import {questions} from "./questionReducer";

export default combineReducers({
    authedUser,
    users,
    questions
});