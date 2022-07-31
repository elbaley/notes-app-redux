import styled from "styled-components";
import { BsPalette } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToDoItem } from "../features/notes/notesSlice";

const NoteInput = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState({
    noteText: "",
    color: "dark",
  });
  const colorOptionsRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (buttonRef.current.contains(e.target)) {
        return;
      }
      if (
        colorOptionsRef.current &&
        !colorOptionsRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [colorOptionsRef]);

  function handleAddNote() {
    if (note.noteText) {
      dispatch(
        addToDoItem({
          noteText: note.noteText,
          color: note.color,
        })
      );
    }
    setNote({ ...note, noteText: "" });
  }
  return (
    <Wrapper className={note.color}>
      <textarea
        value={note.noteText}
        onChange={(e) => {
          setNote({ ...note, noteText: e.target.value });
        }}
        placeholder='Take a note...'
        name='note'
      ></textarea>
      <div className='buttons'>
        <button
          ref={buttonRef}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className='color-options-btn'
        >
          <BsPalette />
        </button>
        <button onClick={handleAddNote} className='add-note'>
          Add Note
        </button>
      </div>
      <div ref={colorOptionsRef} className={`note-color ${isOpen && "show"}`}>
        <div
          onClick={() => setNote({ ...note, color: "dark" })}
          className={`color-option dark ${
            note.color === "dark" ? "active" : ""
          } `}
        ></div>
        <div
          onClick={() => setNote({ ...note, color: "red" })}
          className={`color-option red ${
            note.color === "red" ? "active" : ""
          } `}
        ></div>
        <div
          onClick={() => setNote({ ...note, color: "orange" })}
          className={`color-option orange ${
            note.color === "orange" ? "active" : ""
          } `}
        ></div>
        <div
          onClick={() => setNote({ ...note, color: "yellow" })}
          className={`color-option yellow ${
            note.color === "yellow" ? "active" : ""
          } `}
        ></div>
        <div
          onClick={() => setNote({ ...note, color: "green" })}
          className={`color-option green ${
            note.color === "green" ? "active" : ""
          } `}
        ></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 450px;
  padding: 1rem;
  margin: 1rem auto;
  border: 1px solid grey;
  border-radius: 0.75rem;
  box-shadow: var(--shadow-2);
  height: auto;
  position: relative;

  textarea {
    width: 100%;
    resize: none;
    font-size: 1rem;
    background: none;
    border: none;
  }
  textarea:focus {
    outline: none;
  }
  textarea::placeholder {
    color: white;
    opacity: 0.8;
  }
  textarea:-ms-input-placeholder {
    color: white;
    opacity: 0.8;
  }
  .note-color {
    background: var(--bg-color);
    display: flex;
    visibility: hidden;
    position: absolute;
    padding: 0.4rem;
    left: 1rem;
    bottom: -2rem;
    border: 0.1rem solid black;
    border-radius: 0.3rem;
    box-shadow: var(--shadow-3);
    opacity: 0;
    transition: visibility 0s, opacity 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .show {
    visibility: visible;
    opacity: 1;
  }
  .color-option {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
    border: 1px solid transparent;
  }
  .color-option:last-child {
    margin-right: 0;
  }
  .color-option:hover {
    border: 1px solid white;
  }

  .active {
    position: relative;
  }
  .active:before {
    content: "✔";
    position: absolute;
    right: 0;
    top: -0.4rem;
  }
  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .color-options-btn {
    padding: 0.45rem;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
  }
  .add-note {
    padding: 0.5rem;
  }
`;

export default NoteInput;
