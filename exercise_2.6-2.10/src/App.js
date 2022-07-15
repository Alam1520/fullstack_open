import { useState, useEffect } from 'react';
import personService from './services/person';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [allPersons, setAllPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setAllPersons(initialPersons)
      })
  }, [])

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const person = allPersons.filter((person) =>
      person.name === newName
    )

    const personToAdd = person[0]
    const updatedPerson = { ...personToAdd, number: newNumber }

    if (window.confirm(`${personToAdd.name} is already added to the phonebook, replace the old number with a new one ?`)) {
      personService
        .update(updatedPerson.id, updatedPerson).then(returnedPerson => {
          setAllPersons(allPersons.map(personItem => personItem.id !== personToAdd.id ? personItem : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setAllPersons(allPersons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      })
  }

  const deletePerson = (id) => {
    const filteredPerson = allPersons.filter(person => person.id === id);
    const personName = filteredPerson[0].name;
    const personId = filteredPerson[0].id;
    if (window.confirm(`Delete ${personName} ?`)) {
      personService
        .remove(personId)
      setAllPersons(allPersons.filter(person => person.id !== personId))
    }
  }

  const handleSearchFilter = (event) => {
    const searchValue = event.target.value;
    const filteredPersons = allPersons.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()));
    setPersons(filteredPersons);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchFilter={handleSearchFilter} />
      <h3>Add New</h3>
      <PersonForm addPerson={addPerson} handleNameInput={handleNameInput} handleNumberInput={handleNumberInput} newName={newName} newNumber={newNumber} />
      <h3>Numbers</h3>
      <Persons persons={persons} allPersons={allPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App