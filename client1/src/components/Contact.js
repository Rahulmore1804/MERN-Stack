import React,{useState} from "react";
import axios from "axios";

function Contact() {
  const [Fname, setFname] = useState("");
  function f1(event) {
    setFname(event.target.value);
  }
  const [Lname, setLname] = useState("");
  function f2(event) {
    setLname(event.target.value);
  }
  const [pass, setpass] = useState("");
  function f3(event) {
    setpass(event.target.value);
  }
  const [mssg, setmssg] = useState("");
  function f4(event) {
    setmssg(event.target.value);
  }
 




  function sentt() {
    axios
      .post("http://localhost:3002/msg", {
        Fname: Fname,
        Lname: Lname,
        email: pass,
        msg: mssg
      })
      .then(function a() {
        console.log("dd");
      });
  }
  return (
    <div>
      hello contact
      <div className="sendbox">
        <h1>SEND YOUR MESSAGE TO USE</h1>
            <input onChange={f1} placeholder="First Name"/><br/>
            <input onChange={f2} placeholder="Last Name"/><br/>
            <input onChange={f3}placeholder="Your Mail-id"/><br/>
            <input onChange={f4}placeholder="Your message"/><br/>
            <button onClick={sentt} > Send </button>
        </div>
    </div>
  );
}
export default Contact;
