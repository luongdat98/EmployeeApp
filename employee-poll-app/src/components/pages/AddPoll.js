import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { addQuestions } from "../../actions/questionActions";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/AddPoll.css";

const AddPoll = (props)=>{
   const { isAuthed, authedUser, dispatch } = props;
   const [firstOption, setFirstOption] = useState("");
   const [secondOption, setSecondOption] = useState("");

   const nav = useNavigate();

   const submitForm = (e)=>{
      e.preventDefault();
      dispatch(addQuestions(authedUser, firstOption, secondOption ))
      nav("/");
   };

   function changeOptions(value, bool){
      if(bool){
         setFirstOption(value);
      }
      else{
         setSecondOption(value)
      }
   };

   if (!isAuthed) {
      return <Navigate to={`/login`} />;
    };

   return <div className="poll-creation">
      <h2 className="title">Would You Rather</h2>
      <h3 className="title">Create Your Own Poll</h3>
      <form className="creation-form" onSubmit={submitForm}>
      <br />
         <label className="space">First Option</label>
         <input type="input" placeholder="Option One" onChange={(e)=>changeOptions(e.target.value, true)} value={firstOption}></input>
         <br />
         <label className="space">Second Option</label>
         <input type="input" placeholder="Option Two"onChange={(e)=>changeOptions(e.target.value, false)} value={secondOption}></input>
         <br />
         <div className="space"></div>
         <button className="btn btn-primary" disabled ={firstOption.length===0 || secondOption.length===0}>Submit</button>
      </form>
      </div>;
   };


const mapStateToProps = ({ authedUser}) => ({
   isAuthed: !(authedUser === null),
   authedUser
 });

export default connect(mapStateToProps)(AddPoll);