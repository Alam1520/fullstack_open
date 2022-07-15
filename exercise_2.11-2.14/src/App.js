import { useEffect, useState } from 'react';
import axios from 'axios';
import Countries from './components/Countries';
import Filter from './components/Filter';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`)
      .then(response => {
        setAllCountries(response.data);
      });
  }, [])

  const handleSearchFilter = (event) => {
    setNewFilter(event.target.value)
    if (newFilter) {
      const regex = new RegExp(newFilter, 'i');
      const filteredCountries = () => allCountries.filter(country => country.name.common.match(regex))
      setCountries(filteredCountries)
    }
  }

  return (
    <div>
      <Filter value={newFilter} onChange={handleSearchFilter} />
      <Countries countries={countries} setCountries={setCountries} />
    </div>
  )
}

export default App