import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
    return (
        <div>
            {countries.map(person => <Country key={person.id} person={person} />)}
        </div>
    )
}

export default Countries;