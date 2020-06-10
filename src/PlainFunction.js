import React from 'react';
import "./CSSFile.css";

function PlainFunction (props) {
   return ( <div className = "plainFunction">
                
                <h3><b>Plain Function Task</b></h3>
                <p>Hello my name is {props.name} and I am {props.age} years old.</p>

    </div>
   )
}
export default PlainFunction;