import React from "react";

const Total = (props) => {
    let accumulated = props.total.reduce(function (prev, current) {
        return prev + +current.exercises;
    }, 0);

    return (
        <div>
            <p>Total of {accumulated} excercises</p>
        </div>
    )
}

export default Total;

