import { useSelector } from "react-redux";
import styled from "styled-components";
import NoteInput from "./components/NoteInput";
import NoteItem from "./components/NoteItem";

function App() {
  const notes = useSelector((state) => state.notes.notes);

  return (
    <Wrapper>
      <NoteInput />

      <div className='notes-container'>
        {notes?.map((note) => {
          return (
            <NoteItem key={note.id} color={note.color} text={note.noteText} />
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 500px;
  margin: 0 auto;
  .notes-container {
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .note {
    padding: 0.5rem 0.5rem;
    box-shadow: var(--shadow-3);
    border-radius: 0.2rem;
  }
`;

export default App;
