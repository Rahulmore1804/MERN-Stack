import React,{useState} from "react";
import "./Footer.css";

function Footer() {

  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <footer className="A1">
      <p className="a4">&copy;Footer</p>
      <h1>{time}</h1>
    </footer>
  );
}

export default Footer;
