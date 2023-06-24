import { useState } from 'react';
import { toast } from 'react-toastify';
import { toastOptions } from '../toastOptions/toastOptions';
import { Form, Input, Button } from './Form.styled';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchForm = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
    // console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query)
      return toast.error('Please enter your search details', toastOptions);
    searchMovies(query);
    setQuery('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter for search movies"
          name="query"
          value={query}
          onChange={handleChange}
        />
        <Button type="submit">
          <AiOutlineSearch size="15" />
        </Button>
      </Form>
    </>
  );
};

export default SearchForm;
