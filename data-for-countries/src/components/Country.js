
import React from 'react';
const Country = ({ country }) => {
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
        </div>
    )
}
export default Country;