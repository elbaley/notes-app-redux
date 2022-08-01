import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setFilter } from "../features/notes/notesSlice";
import useDebounce from "../hooks/useDebounce";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  // debounce query
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    dispatch(setFilter(debouncedSearchText));
  }, [debouncedSearchText]);

  return (
    <Wrapper>
      <input
        className='search'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type='text'
        name='search'
        placeholder='Search...'
      />
    </Wrapper>
  );
};

export default SearchInput;

const Wrapper = styled.div`
  text-align: center;
  /* Search */
  .search {
    font-size: 1rem;
    border-radius: 0.2rem;
    border: none;
    padding: 0.5rem;
  }
  .search::placeholder {
    color: white;
  }
`;
