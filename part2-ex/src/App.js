import { useState } from 'react'
import React from 'react'
import SearchBar from './components/SearchBar'
import PhoneBookInfo from './components/PhoneBookInfo'
import AddNewInfo from './components/AddNewInfo'
import { useEffect } from 'react'
import phoneBookInfoService from './services/phoneBookInfoService'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personNameSet, setPersonNameSet] = useState(new Set())
  const [numberSet, setNumberSet] = useState(new Set())
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    phoneBookInfoService.getAll()
      .then(returnedData => {
        console.log('promise fulfilled')
        if (JSON.stringify(returnedData) !== JSON.stringify(persons)) {
          setPersons(returnedData)
          const names = returnedData.map(person => person.name)
          const numbers = returnedData.map(person => person.number)
          setPersonNameSet(new Set(names))
          setNumberSet(new Set(numbers))
        }
      })
  }, [persons])
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
    if (newName === '' || newNumber === '') {
      alert('Please enter both name and number')
      return
    }
    if (personNameSet.has(newName) && numberSet.has(newNumber)) {
      alert(`${newName} and ${newNumber} are already added to phonebook`)
      return
    } else if (personNameSet.has(newName) && !numberSet.has(newNumber)) {
      const person = persons.find(person => person.name === newName)
      const oldNumber = person.number
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = { ...person, number: newNumber }
        phoneBookInfoService.update(person.id, changedPerson)
        setPersons(persons.map(person => person.id !== changedPerson.id ? person : changedPerson))
        setNewName('')
        setNewNumber('')
        const newNumberSet = new Set([...numberSet])
        newNumberSet.delete(oldNumber)
        newNumberSet.add(newNumber)
        setNumberSet(newNumberSet)
      }
      return
    } else if (!personNameSet.has(newName) && numberSet.has(newNumber)) {
      alert(`${newNumber} is already added to phonebook for another person`)
      return
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: (persons.length + 1).toString(),
      }
      phoneBookInfoService.create(personObject)
      setPersons(persons.concat(personObject))
      setPersonNameSet(new Set([...personNameSet, newName]))
      setNumberSet(new Set([...numberSet, newNumber]))
      setNewName('')
      setNewNumber('')
    }
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
  const handleDelete = (id) => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      phoneBookInfoService.deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
    }
    //phoneBookInfoService.deletePerson(id)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Search Bar</h3>
      <SearchBar search={search} handleSearch={handleSearch} handleSearchChange={handleSearchChange} />
      <h3>PhonebookInfo</h3>
      <AddNewInfo handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} />
      <h3>Numbers</h3>
      <PhoneBookInfo persons={persons} deletePerson={handleDelete} />
    </div>
  )
}

export default App