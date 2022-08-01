import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteToDoItem } from "../features/notes/notesSlice";

const NoteItem = ({ color, text, noteId }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper className={` ${color}`}>
      <span className='note-text'>{text}</span>
      <div className='btn-container'>
        <button
          onClick={() => dispatch(deleteToDoItem({ id: noteId }))}
          className='delete'
        >
          <BsTrash />
        </button>
      </div>
    </Wrapper>
  );
};

export default NoteItem;

const Wrapper = styled.article`
  break-inside: avoid;
  margin-bottom: 1rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
  box-shadow: var(--shadow-3);
  border-radius: 0.2rem;
  display: inline-block;
  grid-template-rows: 1fr 0.5rem;
  gap: 1rem;
  .note-text {
    font-size: 1rem;
  }
  .btn-container {
    width: calc(100% + 0.5rem);
    height: 2rem;
    display: flex;
    justify-content: end;
  }
  .delete {
    font-size: 1rem;
    padding: 0.5rem;
    background: none;
  }
  .delete:focus-visible,
  .delete:focus {
    background: none;
    outline: none;
  }
`;
