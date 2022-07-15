import { useState } from 'react';
import Countries from './components/Countries';
import Filter from './components/Filter';

const App = () => {
  const [countries, setCountries] = useState([]);

  const handleSearchFilter = (event) => {
    const searchValue = event.target.value;
    const filteredPersons = countries.filter(country => country.name.toLowerCase().includes(searchValue.toLowerCase()));
    setCountries(filteredPersons);
  }

  return (
    <div>
      <Filter handleSearchFilter={handleSearchFilter} />
      <Countries countries={countries} />
    </div>
  )
}

export default App