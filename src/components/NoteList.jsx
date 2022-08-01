import { useSelector } from "react-redux";
import styled from "styled-components";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const notes = useSelector((state) => state.notes.notes);

  const filterText = useSelector((state) => state.notes.filterText);
  let filteredNotes = notes;
  if (filterText !== "") {
    filteredNotes = notes.filter((note) =>
      note.noteText.toLowerCase().includes(filterText)
    );
  }
  return (
    <Wrapper>
      {filteredNotes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            noteId={note.id}
            color={note.color}
            text={note.noteText}
          />
        );
      })}
    </Wrapper>
  );
};

export default NoteList;

const Wrapper = styled.div`
  width: 100%;
  columns: 2;

  @media (max-width: 550px) {
    columns: 1;
    place-items: center;
    display: grid;
  }
`;
