import { useState } from 'react';
import { toast } from 'react-toastify';
// import { notify } from '../notify/notify';
// import { Form, Input, Button } from './SearchForm.styled';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchFilm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) return toast.error('Please enter a sometings');
    onSearch(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter for search movies"
          name="query"
          value={query}
          onChange={changeQuery}
        />
        <button type="submit">
          <AiOutlineSearch size="15" />
        </button>
      </form>
    </>
  );
};

export default SearchFilm;
