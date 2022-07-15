import React from "react";
import Country from "./Country";

const Countries = ({ countries, setCountries }) => {
    if (countries.length > 10) {
        return (
            <div>
                <h3>Too many matches, specify another filter</h3>
            </div>
        )
    } else if ((countries.length > 2 && countries.length < 10) || countries.length === 0) {
        return (
            <ul>
                {countries.map((country, i) =>
                    <li key={i}> {country.name.common} <button onClick={() => setCountries([country])}>show</button></li>
                )}
            </ul>
        )
    } else {
        return (
            <Country country={countries[0]} />
        )
    }
}

export default Countries;