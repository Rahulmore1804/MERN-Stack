
import React from "react";

function Card(props){
    return(
        <div>
        <img  src={props.image} alt="d"/>
           {props.albumid} 
           {props.title}

        </div>
    )
}
export default Card;