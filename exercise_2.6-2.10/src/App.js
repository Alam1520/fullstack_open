import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(e => e.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return
    }

    if (persons.some(e => e.number === newNumber)) {
      alert(`${newNumber} is already added to the phonebook`);
      return
    }

    if (newNumber === '') {
      alert(`number can not be empty`);
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleSearchFilter = (event) => {
    const searchValue = event.target.value;
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()));
    setPersons(filteredPersons);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleSearchFilter} />
      </div>
      <h3>Add New</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameInput} />
        </div>
        <div>
          number: <input onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      {
        persons.map(person =>
          <Person key={person.id} person={person} />
        )
      }
    </div>
  )
}

export default App