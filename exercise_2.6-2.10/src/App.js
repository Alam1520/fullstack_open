import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas',
      number: '852-12345678'
    }
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

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input />
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