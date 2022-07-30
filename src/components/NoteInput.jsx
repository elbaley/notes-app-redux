import styled from "styled-components";
import { BsPalette } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const NoteInput = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  }, [colorOptionsRef]);
  return (
    <Wrapper>
      <textarea placeholder='Take a note...' name='note'></textarea>
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
        <button className='add-note'>Add Note</button>
      </div>

      <div ref={colorOptionsRef} className={`note-color ${isOpen && "show"}`}>
        <div className='color-option black'></div>
        <div className='color-option red'></div>
        <div className='color-option orange'></div>
        <div className='color-option yellow'></div>
        <div className='color-option green'></div>
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
  .red {
    background: #5c2b29;
  }
  .yellow {
    background: #f9b219;
  }
  .orange {
    background: #ff8801;
  }
  .green {
    background: #05c270;
  }
  .black {
    background: rgba(0, 0, 0, 0.2);
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
