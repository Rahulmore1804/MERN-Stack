import React, { useContext,useState } from "react";
import noteContext from "./notecontext/noteContext";

import Card from "./dataforHome/Card";
import "./Home.css";
import Carddata from "./dataforHome/data";

var items = Carddata.slice(0, 2)
var items1 = Carddata.slice(2,4 )



function Home() {

  const [pagecon,setpagecon] = useState(items)

function sel2(){
  setpagecon(items1)
}
  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 12)
      greet = 'Good Morning';
  else if (hrs >= 12 && hrs <= 17)
      greet = 'Good Afternoon';
  else if (hrs >= 17 && hrs <= 24)
      greet = 'Good Evening';



  function Thirdparty(e) {
    return (
      <Card key={e.key} albumid={e.albumid} title={e.title} image={e.image} />
    );
  }
  const a1 = useContext(noteContext);
  return (
    <div>

    <h1>{greet} {a1.a} <button onClick={sel2}>2</button></h1>
      
      <div className="card">{pagecon.map(Thirdparty)}</div>
      
    </div>
  );
}

export default Home;
