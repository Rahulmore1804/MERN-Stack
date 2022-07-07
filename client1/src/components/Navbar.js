import React , { useContext}from "react";
import "./Navbar.css";
import noteContext from "./notecontext/noteContext";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

let state0 = { a: "3"};
function NoteState(props) {
  // const state = {"a":"bdd","c":"d"}
  return (
    <noteContext.Provider value={state0}>{props.children}</noteContext.Provider>
  );
}



function Navbar() {
  let navigate = useNavigate();
  const a1 = useContext(noteContext);

  
  function erasedata(e){
    
    console.log("6")
    e.preventDefault()
    a1.a=null
    navigate("/");



  }

  // let login =true
  
  return (
    <div className="navbar">
      LOGO
      <ul>
      <li>
        {/* {a1.a===null ? <p>okay</p>:<p>no okay</p> } */}
       {/* <h1> {a1.a}</h1> */}
      </li>
        <li>
          <Link className="link" to="/">
            login
          </Link>
        </li>
        <li>
          <Link className="link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/profile">
            profile
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            contact
          </Link>
        </li>
        <li>
          <button onClick={erasedata}>Log out</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
export { NoteState };