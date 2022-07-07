import axios from "axios";
import React, { useContext, useState } from "react";
import noteContext from "./notecontext/noteContext";

function Profile() {
  const [file, setfile] = useState(null);
  const a1 = useContext(noteContext);

  function changepro(event) {
    setfile(
    event.target.files[0]
)}
  function uploadphoto() {
    const fd = new FormData();
   fd.append("image",file) 
    
    axios
      .post("http://localhost:3002/uploadphoto", {
        pic :fd,
        username: a1.a
      })
      .then(function a() {
        console.log(fd);
      });
  }

  return (
    <div>
      {a1.a}
      Profile
      <p>
        {a1.a === null ? (
          <p>please do login</p>
        ) : (
          <div>
            <p>{a1.a}</p>
            <div>
              <input type="file" onChange={changepro} />
              <button onClick={uploadphoto}>upload</button>
            </div>{" "}
          </div>
        )}
      </p>
    </div>
  );
}

export default Profile;
