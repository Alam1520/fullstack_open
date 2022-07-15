import React from "react";

const Filter = (props) => {
    return (
        <div>
            find countries <input onChange={props.handleSearchFilter} />
        </div>
    )
}

export default Filter;