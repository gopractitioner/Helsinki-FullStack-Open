import Country from './components/Country';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [show, setShow] = useState({});
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
      .catch((error) => console.error(error))
  }, [])
  console.log('render', countries.length, 'countries')

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    setCountriesToShow(countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase())))
  }

  const handleShow = (event, countryName) => {
    setShow(previousShow => ({ ...previousShow, [countryName]: !previousShow[countryName] }))
  }
  return (
    <div>
      find countries<input type="text" value={search} onChange={handleSearchChange} />
      {/* <ul>
        {countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase())).map(country => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul> */}
      <div>
        {
          countriesToShow.length > 10 ?
            <p>Too many matches, specify another filter</p> :
            (
              countriesToShow.length === 1 ?
                <Country country={countriesToShow[0]} /> :
                countriesToShow.map(country =>
                  <p>
                    {country.name.common} <button onClick={(event) => handleShow(event, country.name.common)}>show</button>
                    {show[country.name.common] ? <Country country={country} /> : null}
                  </p>
                )
            )
        }
      </div>
    </div>
  )

}

export default App;
