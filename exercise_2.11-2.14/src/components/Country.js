import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({ country }) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: country.capital[0]
        }

        axios.get('http://api.weatherstack.com/current', { params })
            .then(response => {
                const apiResponse = response.data;
                setWeather([apiResponse])
            }).catch(error => {
                console.log(error);
            })
    }, [country])

    if (weather.length > 0) {
        const currentWeather = weather[0].current
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital: {country.capital[0]}</p>
                <p>area: {country.area}</p>
                <h2>Spoken languages</h2>
                <ul>
                    {Object.keys(country.languages).map(language => <li key={language}>{country.languages[language]}</li>)}
                </ul>
                <img src={country.flags.svg} alt="Country flag"></img>
                <h2>Weather in {country.capital[0]}</h2>
                <p>temperature: {currentWeather.temperature}° Celcius</p>
                <img src={currentWeather.weather_icons[0]} alt="Weather icon"></img>
                <p>wind: {currentWeather.wind_speed} mph direction {currentWeather.wind_dir}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital: {country.capital[0]}</p>
            <p>area: {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {Object.keys(country.languages).map(language => <li key={language}>{country.languages[language]}</li>)}
            </ul>
            <img src={country.flags.svg} alt="Country flag"></img>
        </div>
    )
}

export default Country;