import React from "react";
import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <div>
                <p></p>
                {
                    props.content.map(single => <Part key={single.id} content={single} />)
                }
            </div>
        </div>
    )
}

export default Content;