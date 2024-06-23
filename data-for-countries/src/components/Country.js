import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Country = ({ country }) => {
    const [weather, setWeather] = useState({})
    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        if (!apiKey) {
            console.error('No API key found')
            return
        }
        axios
            //.get(`http://api.weatherstack.com/current?access_key=21de66282bcb85ef79e97502087c36b5&query=${country.capital[0]}`)
            .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital[0]}`)
            .then(response => {
                console.log(response.data)
                setWeather(response.data)
            })
            .catch((error) => console.error(error))
    }, [country, apiKey])
    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital[0]}</div>
            <div>population {country.population}</div>
            <h3>languages</h3>
            <ul>
                {Object.values(country.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} height='100' alt={`flag of ${country.name.common}`} />
            {
                weather.current ?
                    <div>
                        <h3>Weather in {country.capital[0]}</h3>
                        <div><strong>temperature:</strong> {weather.current.temperature} Celsius</div>
                        <img src={weather.current.weather_icons[0]} alt={`weather icon`} />
                        <div><strong>wind:</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</div>
                    </div>
                    : 'Loading weather data...'
            }
        </div>
    )
}
export default Country;