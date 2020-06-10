import React from "react";
import "./CSSFile.css";
const MediaCard = (props) => {
    return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <img src = {props.imageUrl} alt = "StayHomeStaySave"></img>
    </div>
    )
}

export default MediaCard;