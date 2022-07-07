import React from "react";
import validator from "validator";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import noteContext from "./components/notecontext/noteContext";
import "./Login.css";

let state0 = { a: null, c: "d" };

function NoteState(props) {
  return (
    <noteContext.Provider value={state0}>{props.children}</noteContext.Provider>
  );
}

export { NoteState };

function Login() {
  let navigate = useNavigate();
  const [q1, setq1] = useState(false);
  const [q2, setq2] = useState(false);
  const [q3, setq3] = useState(false);
  const [q4, setq4] = useState(false);
  const [q5, setq5] = useState(false);
  const [q6, setq6] = useState(false);
  const [q7, setq7] = useState(false);

  const [Fname, setFname] = useState("");
  const [User, setUser] = useState("");
  const [mail1, setmail1] = useState("");
  const [num, setnum] = useState("");
  const [pass, setpass] = useState("");
  const [Fnameuser, setFnameuser] = useState("");
  const [passuser, setpassuser] = useState("");

  function changeddetofuser(event) {
    let k = event.target.value;

    if (validator.isEmail(k)) {
      setq1(true);
    }
    setFnameuser(event.target.value);
  }
  function changedpassofuser(event) {
    let k = event.target.value;

    if (validator.isStrongPassword(k)) {
      setq2(true);
    }
    setpassuser(event.target.value);
  }

  function changedFname(event) {
    let k = event.target.value;
    if (validator.isLength(k, 5, 10)) {
      setq3(true);
    }
    setFname(event.target.value);
  }
  function changedUser(event) {
    let k = event.target.value;
    if (validator.isLength(k, 8, 10)) {
      setq4(true);
    }
    setUser(event.target.value);
  }

  function changedmail(event) {
    let k = event.target.value;
    console.log(mail1);
    if (validator.isEmail(k)) {
      setq5(true);
    }
    setmail1(event.target.value);
  }

  function changednumber(event) {
    let k = event.target.value;
    if (validator.isLength(k, 10, 10)) {
      setq6(true);
    }
    setnum(event.target.value);
  }
  function changedpass(event) {
    let k = event.target.value;

    if (validator.isStrongPassword(k)) {
      setq7(true);
    }

    setpass(event.target.value);
  }

  function senddetails() {
    console.log(mail1);
    if (
      
      q3 === true &&
      q4 === true &&
      q5 === true &&
      q6 === true &&
      q7 === true
    ) {
      console.log(mail1);
      axios
        .post("http://localhost:3002/createuser", {
          Fname: Fname,
          Uname: User,
          Email: mail1,
          Num: num,
          Pass: pass,
        })
        .then(function a() {
          // alert("sucess register");
          // navigate("/login");
          console.log("done")
        });
    } else {
      alert("pls check details");
    }
  }

  function Login() {
    if (q1 === true && q2 === true) {
      axios
        .post("http://localhost:3002/login", {
          Fnameuser1: Fnameuser,
          passuser1: passuser,
        })
        .then((res) => {
          alert(res.data.message);
          console.log(res.data.message);

          if (res.data.message === "login sucess") {
            state0["a"] = res.data.F1;

            navigate("/home");
          }
        });
    } else {
      alert("pls check det");
    }
  }
  return (
    <div className="whole">
      <div className="reg">
        <h1>Register Here</h1>
        <form>
          <lable> First Name : </lable>
          <input type="text" onChange={changedFname} required={true} />
          <lable> User Name : </lable>
          <input type="text" onChange={changedUser} required={true} />
          <lable> Mail id :</lable>
          <input type="text" onChange={changedmail} required={true} />
          <lable> contact number :</lable>
          <input type="number" onChange={changednumber} required={true} />
          <lable> Password :</lable>
          <input type="text" onChange={changedpass} required={true} />
          <button onClick={senddetails}> Register </button>
        </form>
      </div>
      <div className="log">
        <h1>Login Here</h1>
        <form>
          <lable> Username/Email id :</lable>
          <input
            type="email"
            onChange={changeddetofuser}
            minLength="8"
            required={true}
          />
          <lable> Password :</lable>
          <input
            type="text"
            onChange={changedpassofuser}
            required={true}
            pattern="[A-Za-z]{3}"
            title="Three letter country code"
          />

          <button onClick={Login}> Login </button>
        </form>
      </div>
    </div>
  );
}
export { state0 };
export default Login;

// export {NoteState};
