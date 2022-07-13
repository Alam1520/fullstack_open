import React from "react";

const Part = (props) => {
    return (
        <div>
            <p>{props.content.name} {props.content.exercises}</p>
        </div>
    )
}

export default Part;