import styled from "styled-components";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <Wrapper>
      <h2>Notes App</h2>
      <SearchInput />
      <NoteInput />
      <NoteList />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 400px;
  margin: 0 auto;
  h2 {
    text-align: center;
  }
`;

export default App;
