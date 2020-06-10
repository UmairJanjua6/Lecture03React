import React from "react";
import ReactDOM from "react-dom";
import PlainFunction from "./PlainFunction.js";
import ArrowFunction from "./ArrowFunction.js";
import MediaCard from "./MediaCard.js";
import Gate from "./Gate.js";

const IndexFunction = () => {
    return (
        <div className = "IndexFunction">
            <h2>Assignment 03</h2>
            <PlainFunction name = "Umair Khalid" age = {22}/>
            <ArrowFunction myName = "Umair Khalid" />
            <MediaCard title = "This is MediaCard Title" body = "This is MediaCard body" imageUrl = "https://image.freepik.com/free-vector/stay-home-stay-safe-concept-poster-design_1017-24657.jpg" />
            <Gate isOpen = "false" />
</div>
    )
}
ReactDOM.render(<IndexFunction/>, document.querySelector('#root'));