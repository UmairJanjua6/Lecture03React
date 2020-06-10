import React from 'react';

const Gate = ({isOpen}) => {
    return (
        <div>
            The Gate is <b style = {{color :"red"}}>{isOpen === true ? "Open" : "Closed"}</b>
        </div>
    )
}

export default Gate;