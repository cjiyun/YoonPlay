import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash-es';
import PropTypes from 'prop-types';

const SearchBar = ({ initialValue, onDebounced, onSearch }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const debounced = useMemo(() => debounce(val => onDebounced(val), 300), [onDebounced]);

  useEffect(() => {
    return () => debounced.cancel();
  }, [debounced]);

  const handleChange = e => {
    setInputValue(e.target.value);
    debounced(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();
    debounced.cancel();
    onSearch(inputValue);
  };

  return (
    <form className="flex w-full" onSubmit={handleSearch}>
      <input
        type="text"
        value={inputValue}
        placeholder="영화 제목을 입력해주세요"
        onChange={handleChange}
        className="input-style !rounded-r-none text-black outline-none"
      />
      <input
        type="submit"
        value="검색"
        className="bg-pink100 w-1/5 max-w-24 cursor-pointer rounded-r-md text-white"
      />
    </form>
  );
};

SearchBar.propTypes = {
  initialValue: PropTypes.string,
  onDebounced: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
