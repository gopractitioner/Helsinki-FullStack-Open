import { useState } from 'react'
import React from 'react'
import SearchBar from './components/SearchBar'
import PhoneBookInfo from './components/PhoneBookInfo'
import AddNewInfo from './components/AddNewInfo'
import axios from 'axios'
import { useEffect } from 'react'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personNameSet, setPersonNameSet] = useState(new Set('Arto Hellas'))
  const [numberSet, setNumberSet] = useState(new Set('040-1234567'))
  const [search, setSearch] = useState('')



  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    if (personNameSet.has(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    if (numberSet.has(newNumber)) {
      alert(`${newNumber} is already added to phonebook`)
      return
    }
    if (newName === '' || newNumber === '') {
      alert('Please enter both name and number')
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setPersonNameSet(personNameSet.add(newName))
    setNumberSet(numberSet.add(newNumber))
    setNewName('')
    setNewNumber('')
    //console.log("IDs: ", persons.map(person => person.id))
  }
  const handleSearchChange = (event) => {
    //console.log(event.target.value)
    setSearch(event.target.value)
  }
  const handleSearch = (event) => {
    //console.log(event.target.value)
    const searchResult = persons.filter(person => person.name.toLowerCase() === search.toLowerCase())
    //console.log(searchResult)
    if (searchResult.length === 0) {
      alert('No matches found')
    } else {
      alert(`Search results: ${searchResult.map(person => person.name)}`)
    }
    setSearch('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Search Bar</h3>
      <SearchBar search={search} handleSearch={handleSearch} handleSearchChange={handleSearchChange} />
      <h3>PhonebookInfo</h3>
      <AddNewInfo handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} />
      <h3>Numbers</h3>
      <PhoneBookInfo persons={persons} />
    </div>
  )
}

export default App